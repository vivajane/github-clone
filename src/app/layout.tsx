import Context from "./components/Context";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export default function RootLayout({children}:Readonly<{children: React.ReactNode}>){
  return (
    <html lang="en">
      <body className="w-screen"
>
        <Context>
          <Header/>
          {children}
          <Footer/>
        </Context>
      </body>
    </html>
   
  )

}