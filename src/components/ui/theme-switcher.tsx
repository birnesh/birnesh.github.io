"use client";

import { useState, useEffect } from "react";
// import { MoonStar, Sun } from 'lucide-react';
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import IconButton from "@/components/ui/icon-button";

// import IconButton from '@/components/general/icon-button';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  // until the UI is mounted, display a dummy icon
  if (!mounted) {
    return (
      <IconButton>
        <SunIcon className="h-6 w-6" aria-hidden="true" />
      </IconButton>
    );
  }

  return (
    <IconButton onClick={toggleTheme}>
      {theme === "dark" ? (
        <SunIcon className="h-6 w-6" aria-hidden="true" />
      ) : (
        <MoonIcon className="h-6 w-6" aria-hidden="true" />
      )}
    </IconButton>
  );
};

export default ThemeSwitcher;

// Ref :: https://www.npmjs.com/package/next-themes#avoid-hydration-mismatch
