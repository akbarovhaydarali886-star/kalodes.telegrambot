import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Calculator from './components/Calculator';
import Portfolio from './components/Portfolio';
import WorkSteps from './components/WorkSteps';
import FAQ from './components/FAQ';
import ContactAndLead from './components/ContactAndLead';
import Footer from './components/Footer';
import MobileFloatingActions from './components/MobileFloatingActions';
import OrderModal from './components/OrderModal';

export default function App() {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedLeadData, setSelectedLeadData] = useState(null);
  const [selectedServiceForCalc, setSelectedServiceForCalc] = useState('drinking');

  // Triggered when user selects a service from the Services section to jump to Calculator
  const handleSelectServiceForCalc = (serviceId) => {
    setSelectedServiceForCalc(serviceId);
  };

  // Triggered from Calculator "Ushbu hisob bo'yicha buyurtma berish"
  const handleOrderWithCalc = (calcData) => {
    setSelectedLeadData(calcData);
    setOrderModalOpen(true);
  };

  // Triggered from Portfolio modal "Shunday quduq buyurtma qilish"
  const handleOrderProject = (project) => {
    setSelectedLeadData({
      serviceTitle: project.categoryLabel,
      depth: project.depth,
      title: project.title,
      note: `Obyekt namunasi: ${project.title} (${project.location}, ${project.depth})`
    });
    setOrderModalOpen(true);
  };

  // Generic open order modal
  const handleOpenOrderModal = () => {
    setSelectedLeadData(null);
    setOrderModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-900 flex flex-col font-sans selection:bg-amber-300 selection:text-stone-950 overflow-x-hidden">
      {/* Top Fixed Navbar */}
      <Navbar onOpenOrderModal={handleOpenOrderModal} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onOpenOrderModal={handleOpenOrderModal} />
        <About />
        <Services onSelectServiceForCalc={handleSelectServiceForCalc} />
        <Calculator 
          selectedServiceId={selectedServiceForCalc} 
          onOrderWithCalc={handleOrderWithCalc} 
        />
        <Portfolio onOrderProject={handleOrderProject} />
        <WorkSteps />
        <FAQ />
        <ContactAndLead initialLeadData={selectedLeadData} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Bottom Floating Sticky Action Bar */}
      <MobileFloatingActions />

      {/* Quick Lead Modal */}
      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        initialData={selectedLeadData}
      />
    </div>
  );
}
