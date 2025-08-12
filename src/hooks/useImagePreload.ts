import { useEffect } from 'react';

/**
 * Hook to preload critical images for better performance
 */
export const useImagePreload = (imageSrcs: string[]) => {
  useEffect(() => {
    const preloadImages = imageSrcs.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });

    return () => {
      // Cleanup if needed
      preloadImages.forEach((img) => {
        img.src = '';
      });
    };
  }, [imageSrcs]);
};

/**
 * Hook to preload hero image specifically
 */
export const useHeroImagePreload = () => {
  useImagePreload(['/images/arenal-volcano.webp', '/images/drone-1200.webp']);
};