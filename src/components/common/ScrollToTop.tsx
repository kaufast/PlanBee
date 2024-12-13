"use client";

import UseSticky from "@/hooks/UseSticky";
import { useState, useEffect, useCallback } from "react";

const ScrollToTop = () => {
   const { sticky }: { sticky: boolean } = UseSticky();

   const [showScroll, setShowScroll] = useState(false);

   // Define `checkScrollTop` with `useCallback` to ensure its identity remains stable
   const checkScrollTop = useCallback(() => {
      if (!showScroll && window.pageYOffset > 400) {
         setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
         setShowScroll(false);
      }
   }, [showScroll]);

   const scrollTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
   };

   useEffect(() => {
      window.addEventListener("scroll", checkScrollTop);
      return () => window.removeEventListener("scroll", checkScrollTop);
   }, [checkScrollTop]); // Include `checkScrollTop` in dependencies

   return (
      <div onClick={scrollTop} className={`scroll-top ${sticky ? "active" : ""}`}>
         <i className="bi bi-arrow-up-short"></i>
      </div>
   );
};

export default ScrollToTop;
