import Nav from "@/components/sunglasses/Nav";
import Hero from "@/components/sunglasses/Hero";
import SpecSheet from "@/components/sunglasses/SpecSheet";
import WearTest from "@/components/sunglasses/WearTest";
import Order from "@/components/sunglasses/Order";
import PageFooter from "@/components/sunglasses/PageFooter";

export default function SunglassesPage() {
  return (
    <div className="sg">
      <Nav />
      <Hero />
      <SpecSheet />
      <WearTest />
      <Order />
      <PageFooter />
    </div>
  );
}
