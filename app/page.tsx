import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import WhatIDoLead from "@/components/WhatIDoLead";
import ServiceTuition from "@/components/ServiceTuition";
import ServiceAI from "@/components/ServiceAI";
import ServiceWeb from "@/components/ServiceWeb";
import TeacherTools from "@/components/TeacherTools";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ background: "#FFFFFF", color: "#152A23", minWidth: 320 }}>
      <Header />
      <Hero />
      <Mission />
      <WhatIDoLead />
      <ServiceTuition />
      <ServiceAI />
      <ServiceWeb />
      <TeacherTools />
      <Contact />
      <Footer />
    </div>
  );
}
