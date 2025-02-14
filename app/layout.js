import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "project ",
  keywords: ["project", "nextjs", "react"],
  author: "author",
  description: "Generated by create next app",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head> <meta name="viewport" content="width=device-width, initial-scale=1" />  
    
    </head>
      <body className={inter.className}>
      <Header/>
      {children}</body>
    </html>
  );
}
