import type { Metadata } from "next";
import "./sunglasses.css";

export const metadata: Metadata = {
  title: "Protected Specs — The Hard Case",
  description:
    "Hand-stitched full-grain leather sunglasses case. 2.0mm vegetable-tanned cowhide, crush tested to 6kg, lifetime repair policy. £88 with free UK shipping.",
};

export default function SunglassesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
