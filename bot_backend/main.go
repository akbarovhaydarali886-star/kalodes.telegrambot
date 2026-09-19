package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	tgbotapi "github.com/go-telegram-bot-api/telegram-bot-api/v5"
)

const BotToken = "8900157447:AAEbUvPbAt8pa5JNNQouRThi9hd1cLMeaJk"
// Group Chat ID (Hali aniqlanmagan, vaqtincha bo'sh)
var GroupChatID int64 = 0 

// Mijoz holatini saqlash uchun
type UserState struct {
	Step  int // 0: start, 1: raqam yubordi, 2: xizmat tanladi
	Name  string
	Phone string
}

var userStates = make(map[int64]*UserState)

func main() {
	bot, err := tgbotapi.NewBotAPI(BotToken)
	if err != nil {
		log.Panic(err)
	}

	bot.Debug = true
	log.Printf("Authorized on account %s", bot.Self.UserName)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	// Render uchun maxsus Webhook o'rnatamiz (uyg'otkich saytlar kerak bo'lmasligi uchun)
	webhookURL := "https://kalodes-bot.onrender.com/" + BotToken
	wh, _ := tgbotapi.NewWebhook(webhookURL)
	_, err = bot.Request(wh)
	if err != nil {
		log.Fatal(err)
	}

	updates := bot.ListenForWebhook("/" + BotToken)

	go func() {
		log.Printf("Web server starting on port %s", port)
		if err := http.ListenAndServe("0.0.0.0:"+port, nil); err != nil {
			log.Fatal(err)
		}
	}()

	for update := range updates {
		if update.Message == nil {
			continue
		}

		// Agar xabar guruhdan kelsa va biz hali GroupChatID ni bilmasak
		if update.Message.Chat.IsGroup() || update.Message.Chat.IsSuperGroup() {
			if update.Message.Text == "/start" || update.Message.Text == "/salom" {
				GroupChatID = update.Message.Chat.ID
				msg := tgbotapi.NewMessage(GroupChatID, "✅ Гуруҳ муваффақиятли уланди! Энди сайтдан келган барча буюртмалар шу ерга тушади.")
				bot.Send(msg)
				log.Printf("GURUH ID TOPILDI: %d", GroupChatID)
			}
			continue
		}

		// Mijoz shaxsiy chatda (bot ichida) yozayotgan bo'lsa
		chatID := update.Message.Chat.ID
		user, exists := userStates[chatID]
		if !exists {
			user = &UserState{Step: 0, Name: update.Message.From.FirstName}
			userStates[chatID] = user
		}

		// Agar mijoz /start bopsa
		if update.Message.Text == "/start" {
			user.Step = 1
			user.Name = update.Message.From.FirstName
			
			msg := tgbotapi.NewMessage(chatID, fmt.Sprintf("Здравствуйте, <b>%s</b>!\nПожалуйста, отправьте ваш номер телефона, чтобы мастер мог связаться с вами.", user.Name))
			msg.ParseMode = "HTML"
			
			// Raqam yuborish tugmasi
			btn := tgbotapi.KeyboardButton{
				Text:           "📱 Отправить номер",
				RequestContact: true,
			}
			keyboard := tgbotapi.NewReplyKeyboard(tgbotapi.NewKeyboardButtonRow(btn))
			keyboard.ResizeKeyboard = true
			msg.ReplyMarkup = keyboard
			
			bot.Send(msg)
			continue
		}

		// Agar mijoz raqamini yuborsa (Kontakt orqali yoki qolda yozib)
		if user.Step == 1 {
			if update.Message.Contact != nil {
				user.Phone = update.Message.Contact.PhoneNumber
			} else {
				user.Phone = update.Message.Text // Qolda yozgan bo'lsa
			}
			user.Step = 2

			msg := tgbotapi.NewMessage(chatID, "Отлично! Теперь выберите услугу, которая вас интересует:")
			
			// Xizmatlar menyusi
			keyboard := tgbotapi.NewReplyKeyboard(
				tgbotapi.NewKeyboardButtonRow(
					tgbotapi.NewKeyboardButton("💧 Питьевой колодец"),
				),
				tgbotapi.NewKeyboardButtonRow(
					tgbotapi.NewKeyboardButton("🔧 Чистка и углубление"),
				),
				tgbotapi.NewKeyboardButtonRow(
					tgbotapi.NewKeyboardButton("🏗 Установка колец"),
				),
			)
			keyboard.ResizeKeyboard = true
			msg.ReplyMarkup = keyboard

			bot.Send(msg)
			continue
		}

		// Agar mijoz xizmatni tanlasa
		if user.Step == 2 {
			serviceType := update.Message.Text
			
			// Guruhga xabar yuborish
			if GroupChatID != 0 {
				loc, _ := time.LoadLocation("Asia/Tashkent")
				now := time.Now().In(loc).Format("02.01.2006 15:04")
				
				adminText := fmt.Sprintf("🔔 <b>Новая заявка с бота!</b>\n\n📅 <b>Дата:</b> %s\n👤 <b>Имя клиента:</b> %s\n📞 <b>Телефон:</b> %s\n🚰 <b>Услуга:</b> %s\n💬 <b>Телеграм:</b> @%s",
					now, user.Name, user.Phone, serviceType, update.Message.From.UserName)
				
				adminMsg := tgbotapi.NewMessage(GroupChatID, adminText)
				adminMsg.ParseMode = "HTML"
				bot.Send(adminMsg)
			}

			// Mijozga rahmat aytish
			msg := tgbotapi.NewMessage(chatID, "✅ <b>Спасибо! Ваша заявка успешно отправлена.</b>\nМастер Акмаль свяжется с вами в ближайшее время.")
			msg.ParseMode = "HTML"
			msg.ReplyMarkup = tgbotapi.NewRemoveKeyboard(true)
			bot.Send(msg)
			
			// Holatni tozalash
			delete(userStates, chatID)
		}
	}
}
