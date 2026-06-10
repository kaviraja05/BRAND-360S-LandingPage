import { Varela_Round } from "next/font/google";
import "./globals.css";
import FloatingIcons from "@/components/FloatingIcons";

const varela = Varela_Round({
  weight: "400",
  variable: "--font-varela",
  subsets: ["latin"],
});

export const metadata = {
  title: "Brand360s | Professional Web Development Agency",
  description: "Stop Losing Customers Without a Professional Website. We build modern, high-converting websites for businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${varela.variable} font-sans h-full antialiased bg-white text-black scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white selection:bg-brand-cyan selection:text-white">
        {children}
        <FloatingIcons />
      </body>
    </html>
  );
}
