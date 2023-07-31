import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Credentials from "../components/UI/Credentials";
import Sidenavnew from "../components/Navigationbar/Sidenavnew";


const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} application new-layout`}>
        <div className="page-overview">
          <Sidenavnew />
          <div className="main-content ml-64">{children}</div>
        </div>
      </body>
    </html>
  );
};

export default Layout;
