# Quduq Master — Landing Page

"Quduq Master" (Ustasi: Akmal) professional quduq (kolodez) qazish, tozalash, chuqurlashtirish va beton halqalar o'rnatish biznesi uchun zamonaviy va responsiv Landing Page sayti.

---

## 🚀 Texnologiyalar
- **React.js 19** + **Vite**
- **Tailwind CSS v4** (Mobile-first, zamonaviy UI/UX)
- **Lucide React** (Zamonaviy vektor ikonlar)
- **Telegram Bot API** integratsiyasi

---

## ⚙️ Ishga tushirish (Local Development)

Loyihani kompyuteringizda ishga tushirish uchun:

```bash
cd haydarali-a
npm run dev
```

Brauzeringizda ochiladi: `http://localhost:5173`

---

## 🏗 Loyihani Production uchun yig'ish (Build)

```bash
npm run build
```

Natija `dist/` papkasiga tayyorlanadi va uni istalgan hostingga (Vercel, Netlify, cPanel, VPS) joylashtirishingiz mumkin.

---

## 📱 Kontaktlar va Ma'lumotlarni O'zgartirish

Barcha kontaktlar, telefonlar, narxlar va portfolio obyektlari bitta qulay faylda jamlangan:
👉 `src/data/mockData.js`

- **Asosiy telefon & Telegram:** `+7 (967) 024-15-63` (`https://t.me/+79670241563`)
- **Qo'shimcha telefon:** `+7 (925) 930-19-31`
- **WhatsApp:** `https://wa.me/79670241563`
- **Instagram:** `@kalodezakmal.ru` (`https://instagram.com/kalodezakmal.ru`)

---

## 🤖 Telegram Bot API sozlamalari

Formadan tushgan arizalar to'g'ridan-to'g'ri Telegramingizga kelishi uchun:
1. `.env` faylini oching.
2. `@BotFather` dan olgan bot tokeningiz va guruh/admin `chat_id` sini kiriting:
   ```env
   VITE_TELEGRAM_BOT_TOKEN=123456789:ABCdefGhIJKlmNoPQRsTUVwxyZ
   VITE_TELEGRAM_CHAT_ID=123456789
   ```
3. Loyihani qayta ishga tushiring (`npm run dev`).
