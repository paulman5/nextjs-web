"use client";

import { useState, useEffect } from "react";
import Documenteditor from "../../components/Documenteditor/Documenteditor";

export default function Draftpage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1300);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <div className="rounded-xl bg-white ">
          <div className="w-full h-full flex content-center items-center">
            Sorry, this page is not available on small screens.
          </div>
        </div>
      ) : (
        <div className="relative left-28">
          <Documenteditor />
        </div>
      )}
    </>
  );
}
