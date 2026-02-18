/**
 * Site Content Configuration
 * Centralized file for all images, text, colors, and content across the website
 * Update this file to change images, text, and other site content
 */

// ============================================================================
// COLORS & BRANDING
// ============================================================================
export const colors = {
  primary: '#8B5A3C',    // Brown
  secondary: '#D4A574',  // Tan
  accent: '#2D5016',     // Dark Green
  gold: '#FFD700',       // Gold
};

export const fonts = {
  sans: ['Inter', 'sans-serif'],
  serif: ['Crimson Text', 'serif'],
};

// ============================================================================
// CURRENCY SETTINGS
// ============================================================================
export const currency = {
  code: 'GHS',
  symbol: '₵',
  name: 'Ghana Cedis',
  locale: 'en-GH',
};

// Helper function to format currency
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat(currency.locale, {
    style: 'currency',
    currency: currency.code,
  }).format(amount);
};

// ============================================================================
// NAVIGATION
// ============================================================================
export const navigation = {
  logo: 'Shiashie Traditional Council',
  logoImage: 'https://cdn.builder.io/api/v1/image/assets%2Fc58cb02700f64f39808b429a213452f6%2F016c7dfe08914aec98d1d9cdfa1f2a3c?format=webp&width=800&height=1200',
  items: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Properties', href: '/houses-lands' },
    { label: 'Donate', href: '/donate' },
    { label: 'Contact', href: '/contact' },
    { label: 'Message', href: '/message' },
  ],
};

// ============================================================================
// HERO SECTIONS (Update image URLs here)
// ============================================================================
export const heroSections = {
  home: {
    backgroundImage: '',  // Optional: URL to background image
    title: 'Shiashie Traditional Council',
    subtitle: 'Preserving Our Heritage, Building Our Future Together',
    ctas: [
      { label: 'Learn About Us', href: '/about', style: 'secondary' },
      { label: 'Support Our Community', href: '/donate', style: 'primary' },
    ],
  },
  about: {
    backgroundImage: '',  // Optional: URL to background image
    title: 'About Shiashie Traditional Council',
    subtitle: 'Understanding our roots, celebrating our heritage, building our future',
  },
  properties: {
    backgroundImage: '',  // Optional: URL to background image
    title: 'Houses & Lands',
    subtitle: 'Explore properties available through the Traditional Council',
  },
  donate: {
    backgroundImage: '',  // Optional: URL to background image
    title: 'Support Our Community',
    subtitle: 'Make a secure donation to support community development projects',
  },
  contact: {
    backgroundImage: '',  // Optional: URL to background image
    title: 'Get in Touch',
    subtitle: 'Contact us with questions or to become a member',
  },
};

// ============================================================================
// HOME PAGE CONTENT
// ============================================================================
export const homePage = {
  // Impact Stats Section
  impactStats: [
    { number: '1000+', label: 'Community Members' },
    { number: '50+', label: 'Properties Managed' },
    { number: 'GHS 100K+', label: 'Community Projects Funded' },
  ],

  // Features Section
  features: [
    {
      title: 'Community Updates',
      description: 'Stay informed about council decisions, events, and community news.',
      icon: '📢',
    },
    {
      title: 'Properties',
      description: 'Explore houses and lands available through the Traditional Council.',
      icon: '🏠',
    },
    {
      title: 'Support Community',
      description: 'Make secure donations to support our community development projects.',
      icon: '❤️',
    },
    {
      title: 'Get in Touch',
      description: 'Contact us with questions, concerns, or to become a member.',
      icon: '📞',
    },
    {
      title: 'Message Leadership',
      description: 'Send messages directly to the council leadership for important matters.',
      icon: '✉️',
    },
    {
      title: 'Transparency',
      description: 'We maintain transparency in all council operations and financial matters.',
      icon: '👁️',
    },
  ],

  // CTA Section
  ctaSection: {
    title: 'Ready to Support?',
    description: 'Join us in preserving our traditions and building a stronger community.',
    buttonText: 'Make a Donation',
    buttonLink: '/donate',
  },
};

// ============================================================================
// ABOUT PAGE CONTENT
// ============================================================================
export const aboutPage = {
  history: {
    title: 'Our History',
    paragraphs: [
      'Shiashie Traditional Council is a custodian of Ghanaian heritage, established to preserve cultural traditions and support community development. Our roots run deep in the cultural fabric of Ghana, serving as a bridge between the past and the future.',
      'For decades, we have been instrumental in maintaining traditional practices, resolving disputes, and fostering unity within our community. Our council has evolved to include modern governance while maintaining respect for our ancestral wisdom.',
    ],
    milestones: [
      'Founded: Preserving traditions for generations',
      'Registered with Government: Formal recognition of authority',
      'Community Projects: Supporting local development',
      'Dispute Resolution: Over 500 cases handled fairly',
    ],
  },

  mission: 'To preserve and promote Ghanaian cultural traditions while providing excellent governance, community support, and equitable property management. We strive to create an environment where tradition and modernity coexist harmoniously.',

  vision: 'A thriving community rooted in our traditions, united in purpose, and committed to sustainable development. We envision a future where our cultural heritage is celebrated globally while our community prospers.',

  coreValues: [
    { title: 'Respect', description: 'Honoring our traditions and each other' },
    { title: 'Integrity', description: 'Acting with honesty and transparency' },
    { title: 'Community', description: 'Supporting one another in all endeavors' },
    { title: 'Progress', description: 'Advancing while preserving our heritage' },
  ],

  leadership: [
    { name: 'Nii Aryee Okai Mensah', title: 'Council Chief', image: '' },
    { name: 'Nii Quaynor Adjetey', title: 'Secretary', image: '' },
    { name: 'Nii Otuobjor Osu', title: 'Treasurer', image: '' },
  ],
};

// ============================================================================
// PROPERTIES/HOUSES & LANDS
// ============================================================================
export const properties = [
  {
    id: '1',
    title: 'Modern 3-Bedroom House',
    location: 'Shiashie, Accra',
    type: 'House',
    price: 'GHS 250,000',
    description: 'A beautifully designed 3-bedroom house with modern amenities. Perfect for families looking for a comfortable home in a serene environment.',
    image_url: '', // Add image URL here
  },
  {
    id: '2',
    title: 'Prime Residential Land',
    location: 'East Legon, Accra',
    type: 'Land',
    price: 'GHS 150,000',
    description: 'A well-surveyed 2-acre residential land with good access roads. Ideal location for building your dream home.',
    image_url: '', // Add image URL here
  },
  {
    id: '3',
    title: 'Commercial Property',
    location: 'Tema, Greater Accra',
    type: 'Commercial',
    price: 'GHS 400,000',
    description: 'A strategically located commercial property perfect for retail or office use. High foot traffic area.',
    image_url: '', // Add image URL here
  },
  {
    id: '4',
    title: 'Luxury 4-Bedroom Villa',
    location: 'Osu, Accra',
    type: 'House',
    price: 'GHS 500,000',
    description: 'An upscale 4-bedroom villa with swimming pool, modern kitchen, and premium finishes throughout.',
    image_url: '', // Add image URL here
  },
];

// ============================================================================
// FOOTER CONTENT
// ============================================================================
export const footer = {
  about: 'Shiashie Traditional Council is dedicated to preserving our cultural heritage while supporting community development and maintaining transparency in all our operations.',
  quickLinks: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Properties', href: '/houses-lands' },
    { label: 'Donate', href: '/donate' },
    { label: 'Contact', href: '/contact' },
  ],
  contactInfo: {
    phone: '+233-24-122-4172', // Update with actual number
    email: 'shiashietraditionalcouncil@gmail.com', // Update with actual email - messages will be sent here
    address: 'Shiashie, Accra, Ghana',
  },
  // Email configuration for receiving messages
  emailConfig: {
    recipientEmail: 'shiashietraditionalcouncil@gmail.com', // Where messages should be sent
    senderName: 'Shiashie Traditional Council',
  },
  socialMedia: {
    facebook: '', // Add Facebook URL
    twitter: '', // Add Twitter URL
    instagram: '', // Add Instagram URL
    linkedin: '', // Add LinkedIn URL
  },
  copyrightYear: new Date().getFullYear(),
};

// ============================================================================
// CONTACT PAGE CONTENT
// ============================================================================
export const contactPage = {
  title: 'Contact Shiashie Traditional Council',
  description: 'Have questions or want to get involved? Reach out to us today.',
  contactInfo: [
    {
      title: 'Phone',
      value: '+233-24-122-4172', // Update with actual number
      icon: '📞',
    },
    {
      title: 'Email',
      value: 'shiashietraditionalcouncil@gmail.com', // Update with actual email
      icon: '📧',
    },
    {
      title: 'Address',
      value: 'Shiashie, Accra, Ghana',
      icon: '📍',
    },
  ],
};

// ============================================================================
// DONATION PAGE CONTENT
// ============================================================================
export const donationPage = {
  title: 'Support Our Community',
  description: 'Your generous donations help us fund community projects and preserve our heritage.',
  predefinedAmounts: [100, 250, 500, 1000],
  successMessage: 'Thank you for your donation! Your support means everything to us.',
  supportedProjects: [
    'Community Development',
    'Cultural Preservation',
    'Education Programs',
    'Healthcare Initiatives',
  ],
};

// ============================================================================
// MESSAGE PAGE CONTENT
// ============================================================================
export const messagePage = {
  title: 'Send a Message to Leadership',
  description: 'Share your thoughts, concerns, or suggestions with the council leadership.',
  successMessage: 'Your message has been received. Thank you for reaching out!',
};

// ============================================================================
// EXPORT ALL CONTENT
// ============================================================================
export const siteContent = {
  colors,
  fonts,
  navigation,
  heroSections,
  homePage,
  aboutPage,
  properties,
  footer,
  contactPage,
  donationPage,
  messagePage,
};

export default siteContent;
