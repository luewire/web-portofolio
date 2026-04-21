"use client";

import { useEffect, useState } from "react";
// import Preloader from "./Preloader";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    // Check if preloader has been shown in this session
    const preloaderShown = sessionStorage.getItem("preloader-shown");

    if (!preloaderShown) {
      setShowPreloader(true);
      sessionStorage.setItem("preloader-shown", "true");
    }
  }, []);

  return (
    <>
      {/* {showPreloader && <Preloader />} */}
      {children}
    </>
  );
}
