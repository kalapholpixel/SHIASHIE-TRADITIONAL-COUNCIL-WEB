/**
 * Images Configuration
 * Centralized location for managing all image paths and references
 * Update image paths here to change them throughout the application
 */

export const images = {
  // Hero/Banner Images
  hero: {
    main: '/images/hero-banner.jpg',
    about: '/images/about-banner.jpg',
    contact: '/images/contact-banner.jpg',
  },

  // Home/Landing Page
  home: {
    welcome: '/images/home-welcome.jpg',
    feature1: '/images/feature-1.jpg',
    feature2: '/images/feature-2.jpg',
    feature3: '/images/feature-3.jpg',
  },

  // About Page
  about: {
    main: '/images/about-main.jpg',
    history: '/images/about-history.jpg',
    mission: '/images/about-mission.jpg',
  },

  // Houses & Lands Page
  housesLands: {
    banner: '/images/houses-lands-banner.jpg',
    property1: '/images/property-1.jpg',
    property2: '/images/property-2.jpg',
    property3: '/images/property-3.jpg',
    gallery1: '/images/gallery-1.jpg',
    gallery2: '/images/gallery-2.jpg',
    gallery3: '/images/gallery-3.jpg',
  },

  // Contact Page
  contact: {
    banner: '/images/contact-banner.jpg',
    map: '/images/location-map.jpg',
  },

  // Navigation & UI
  nav: {
    logo: '/images/logo.png',
    favicon: '/favicon.ico',
  },

  // Footer
  footer: {
    social: '/images/social-links.jpg',
  },
};

// Helper function to get image path
export const getImagePath = (section: keyof typeof images, key: string): string => {
  const sectionImages = images[section] as Record<string, string>;
  return sectionImages?.[key] || '';
};
