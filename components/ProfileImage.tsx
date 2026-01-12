'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ProfileImageProps {
  src: string;
  alt: string;
  fallback: string;
  size?: number;
}

export function ProfileImage({ src, alt, fallback, size = 160 }: ProfileImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <span className="text-4xl font-bold text-blue-400">{fallback}</span>
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
