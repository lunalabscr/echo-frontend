export interface Offer {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  mobileImage?: string; // Optional property for mobile-specific images
  desktopImage?: string; // Optional property for desktop-specific images
  tabletImage?: string; // Optional property for tablet-specific images
}
