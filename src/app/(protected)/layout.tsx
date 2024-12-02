import MainNav from "@/components/ui/MainNav";
import NavBar from "@/components/ui/NavBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AiO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <MainNav />
      <NavBar />
      {children}
    </div>
  );
}
