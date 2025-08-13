"use client"
import Context from "./components/Context";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { usePathname } from "next/navigation";

export default function RootLayout({children}:Readonly<{children: React.ReactNode}>){
  const pathname = usePathname();

  const hidePage = "/search";
  const hiddenPage = pathname.includes(hidePage);

  return (
    <html lang="en">
      <body className="w-screen"
>
        <Context>
          {!hiddenPage && <Header />}
          {children}
          {!hiddenPage && <Footer />}
        </Context>
      </body>
    </html>
   
  )

}