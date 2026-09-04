"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initApp } from "@/main";

export default function AppController() {
  const pathname = usePathname();

  useEffect(() => {
    // Run controller logic on initial mount and route transition
    const timer = setTimeout(() => {
      initApp();
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
