import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BYAT COIN",
  description: "BYAT | Official Partner of Bonk's Ass | Solana Memecoin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true} className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
