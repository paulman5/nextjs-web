"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import Credentials from "../components/UI/Credentials";
import Sidenavnew from "../components/Navigationbar/Sidenavnew";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const element = document.getElementsByClassName(
      "__className_20951f"
    )[0] as HTMLElement;
    element.className = "application new-layout";
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Sidenavnew />
        <div>{children}</div>
      </body>
    </html>
  );
};

export default Layout;
