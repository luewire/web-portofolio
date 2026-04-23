"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "./Preloader";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [showPreloader, setShowPreloader] = useState(false);
  const PRELOADER_KEY = "preloader-pure-wave-v1";

  useEffect(() => {
    // Check if preloader has been shown in this session
    const preloaderShown = sessionStorage.getItem(PRELOADER_KEY);

    if (!preloaderShown) {
      setShowPreloader(true);
      sessionStorage.setItem(PRELOADER_KEY, "true");
    }
  }, [PRELOADER_KEY]);

  return (
    <>
      {children}
      <AnimatePresence>
        {showPreloader && (
          <Preloader onComplete={() => setShowPreloader(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
