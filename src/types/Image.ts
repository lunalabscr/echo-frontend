export interface Image {
  src: string; // The source URL of the image
  alt: string; // Alternative text for the image
  mobileSrc?: string; // Optional source for mobile-specific images
  desktopSrc?: string; // Optional source for desktop-specific images
  tabletSrc?: string; // Optional source for tablet-specific images
  className?: string; // Optional CSS class name for styling
}
