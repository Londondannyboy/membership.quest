'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ProfileImageProps {
  src: string;
  alt: string;
  fallback: string;
  size?: number;
}

export function ProfileImage({ src, alt, fallback, size = 160 }: ProfileImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check if image exists before trying to load
  useEffect(() => {
    const img = new window.Image();
    img.src = src;
    img.onload = () => {
      setIsLoading(false);
      setHasError(false);
    };
    img.onerror = () => {
      setIsLoading(false);
      setHasError(true);
    };
  }, [src]);

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-slate-700 animate-pulse">
        <span className="text-4xl font-bold text-blue-400/50">{fallback}</span>
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#9A7B0A] to-[#8B6914]">
        <span className="text-5xl font-serif text-white">{fallback}</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className="w-full h-full object-cover"
      onError={() => setHasError(true)}
    />
  );
}
