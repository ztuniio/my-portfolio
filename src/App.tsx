import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import AICVCheck from "./components/AICVCheck";
import OrderForm from "./components/OrderForm";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  const [selectedServiceId, setSelectedServiceId] = useState("ats-cv");

  const handleSelectTier = (tierId: string) => {
    // Map pricing tier selections to dropdown values
    if (tierId === "starter") {
      setSelectedServiceId("starter");
    } else if (tierId === "professional") {
      setSelectedServiceId("professional");
    } else if (tierId === "bundle") {
      setSelectedServiceId("bundle");
    } else {
      setSelectedServiceId("ats-cv");
    }

    // Smooth scroll down to order form
    const formSection = document.getElementById("order-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white selection:bg-[#39FF14] selection:text-black">
      {/* Header / Nav Bar */}
      <Header />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Dynamic Animated Stats Bar */}
        <StatsBar />

        {/* Comprehensive Services Grid */}
        <Services />

        {/* Pricing Matrix */}
        <Pricing onSelectTier={handleSelectTier} />

        {/* Featured Centerpiece AI CV Scanner */}
        <AICVCheck />

        {/* Live Active Lead Log & Order capture */}
        <OrderForm selectedServiceId={selectedServiceId} />

        {/* regional success stories */}
        <Testimonials />
      </main>

      {/* Interactive Footer & Contact links */}
      <Footer />
    </div>
  );
}
