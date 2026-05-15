import { Playfair } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Provider from "@/components/Provider";

const playFair = Playfair({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "MedShare Africa | Connect with Health",
  description: "A platform for sharing medical resources",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playFair.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Provider>
          <Navbar />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}