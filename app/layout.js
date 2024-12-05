import { Inter } from "next/font/google";
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Haryana Industries",
  description: "Get Subsidies, Clearances, NOC, Licenses, CLU and Finance etc.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
