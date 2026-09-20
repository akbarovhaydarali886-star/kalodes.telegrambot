import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactAndLead from './components/ContactAndLead';
import Footer from './components/Footer';
import MobileFloatingActions from './components/MobileFloatingActions';
import OrderModal from './components/OrderModal';

export default function App() {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedLeadData, setSelectedLeadData] = useState(null);

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
        <Portfolio onOrderProject={handleOrderProject} />
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
