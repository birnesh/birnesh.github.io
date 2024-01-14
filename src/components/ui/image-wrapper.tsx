"use client";

import { useEffect, useState } from "react";
import Image, { ImageProps, StaticImageData } from "next/image";
import { useTheme } from "next-themes";

type ImageWrapperProps = ImageProps & {
  src?: string 
};

const ImageWrapper = ({
  src,
  alt,
  ...props
}: ImageWrapperProps) => {
  // Ref :: https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  //   const finalSrc = theme === 'dark' ? srcForDarkMode || src : src;

  return <img src={src} alt={alt} {...props} />;
};

export default ImageWrapper;
