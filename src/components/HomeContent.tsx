"use client";

import { useState, useCallback } from "react";
import Preloader from "./Preloader";

export default function HomeContent({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false);

  const handleComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {!loaded && <Preloader onComplete={handleComplete} />}
      <div className={loaded ? "page-revealed" : "page-hidden"}>
        {children}
      </div>
    </>
  );
}
