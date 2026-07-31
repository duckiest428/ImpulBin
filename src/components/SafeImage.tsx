import React, { useState, useEffect } from 'react';
import { getFallbackDataUri, getAssetUrl } from '../utils/assetUrl';

export type FallbackType = 'coin' | 'card' | 'player' | 'generic';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackType?: FallbackType;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  fallbackType,
  onError,
  className,
  ...props
}) => {
  const typeKey: FallbackType = fallbackType || 'generic';
  const initialSrc = src || getFallbackDataUri(typeKey);
  const [imgSrc, setImgSrc] = useState<string>(initialSrc);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    const resolvedSrc = src || getFallbackDataUri(typeKey);
    setImgSrc(resolvedSrc);
    setHasError(false);
  }, [src, typeKey]);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (!hasError) {
      setHasError(true);
      const fallback = getFallbackDataUri(typeKey);
      if (imgSrc !== fallback) {
        setImgSrc(fallback);
      }
    }
    if (onError) {
      onError(e);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt || ''}
      className={className}
      onError={handleError}
      referrerPolicy="no-referrer"
      {...props}
    />
  );
};
