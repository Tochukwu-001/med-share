import { Playfair } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
<<<<<<< HEAD


const playFair = Playfair({
  weight: ["300", "400", "500", "600", "700", "800", "900"]
})

export const metadata = {
  title: "Medshare Africa - connect with health",
=======
import Footer from "@/components/Footer";
import Provider from "@/components/Provider";

const playFair = Playfair({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "MedShare Africa | connect with health",
>>>>>>> a3b43a4f55cdb78bd1d9ebf2eec467f8a2f1c80b
  description: "A platform for sharing medical resources",
};

export default function RootLayout({ children }) {
  return (
<<<<<<< HEAD
    <html
      lang="en"
<<<<<<< HEAD
      className={`${playFair.className}h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
       <Navbar/>
        {children}</body>
=======
      className={`${playFair.className} h-full antialiased`}
    >
=======
    <html lang="en" className={`${playFair.className} h-full antialiased`}>
>>>>>>> 435087bf431decd73cff5608be8ff2e0472ec552
      <body className="min-h-full flex flex-col">
        <Provider>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
>>>>>>> a3b43a4f55cdb78bd1d9ebf2eec467f8a2f1c80b
    </html>
  );
}
