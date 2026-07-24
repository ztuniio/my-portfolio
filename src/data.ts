import { ServiceItem, PricingTier, TestimonialItem } from "./types";

export const servicesData: ServiceItem[] = [
  {
    id: "ats-cv",
    title: "ATS-Optimized CV",
    description: "Algorithmic-compatible CV formatted strictly to bypass automated parsing hurdles, using high-impact industry keywords.",
    icon: "FileText",
    tag: "Essential"
  },
  {
    id: "designed-cv",
    title: "Designed / Sidebar CV",
    description: "Visually premium custom designs featuring dual-column layouts and bespoke aesthetics that leave a lasting human impression.",
    icon: "Layout",
    tag: "Creative"
  },
  {
    id: "gulf-cv",
    title: "Gulf-Market CV",
    description: "Specifically tailored for UAE, Saudi Arabia, Qatar, and Bahrain. Localized formatting and compliance for GCC-standard recruitment.",
    icon: "Globe",
    tag: "High-Demand"
  },
  {
    id: "cover-letter",
    title: "Tailored Cover Letter",
    description: "A compelling, narrative-driven companion document written specifically to target your desired organization and role.",
    icon: "Send"
  },
  {
    id: "linkedin",
    title: "LinkedIn Optimization",
    description: "Full rewrite of your LinkedIn bio, headline, and experience sections to optimize the algorithm and attract direct recruiter DMs.",
    icon: "Linkedin",
    tag: "Boost Visibility"
  },
  {
    id: "cv-template",
    title: "Sleek CV Templates",
    description: "Downloadable, fully-customizable CV models designed in MS Word and Google Docs format with optimal fonts and margins.",
    icon: "FileCode"
  }
];

export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter Package",
    price: "Rs. 1,500",
    description: "Perfect for entry-level professionals seeking a rapid ATS-compatible boost.",
    features: [
      "1 ATS-Optimized Professional CV",
      "PDF and Edit-Ready Word Format",
      "ATS Keyword Alignment",
      "1 Round of Revisions Included",
      "Standard 3-Day Delivery"
    ],
    isPopular: false
  },
  {
    id: "professional",
    name: "Professional GCC",
    price: "Rs. 2,500",
    description: "Our best seller. Custom-tailored for experienced pros and candidates targeting the Gulf/GCC.",
    features: [
      "1 ATS-Optimized & GCC-Localized CV",
      "Targeted Companion Cover Letter",
      "Industry-Specific Keyword Research",
      "GCC Recruiter Alignment (UAE/KSA/Qatar)",
      "3 Rounds of Revisions Included",
      "Priority 2-Day Delivery"
    ],
    isPopular: true
  },
  {
    id: "bundle",
    name: "Complete Bundle",
    price: "Rs. 3,500",
    description: "The complete career transformation. Includes personal expert consulting and social branding.",
    features: [
      "Everything in Professional GCC Package",
      "Full LinkedIn Profile Optimization Sheet",
      "1-on-1 WhatsApp Support with Lead Writer",
      "Cold-Email Pitch Guide for Gulf Recruiters",
      "Unlimited Lifetime Revisions",
      "24-48 Hours Express Delivery"
    ],
    isPopular: false
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "t1",
    name: "Muhammad Fahad",
    role: "Senior Full Stack Engineer",
    location: "Pakistan ➔ Dubai, UAE",
    quote: "The Gulf-Market CV package was an absolute game changer. Within 2 weeks of updating my resume and LinkedIn profile, I was contacted by a top-tier tech firm in Dubai. My ATS score went from 45% to 85%!"
  },
  {
    id: "t2",
    name: "Ayesha Khan",
    role: "Lead Marketing Manager",
    location: "Lahore ➔ Riyadh, Saudi Arabia",
    quote: "HireSignal understood exactly what recruiters in Saudi Arabia are looking for. The Cover Letter was tailored perfectly, and the in-depth keyword density helped me secure 4 direct interview calls in Riyadh."
  },
  {
    id: "t3",
    name: "Tariq Al-Mansoor",
    role: "Operations Director",
    location: "Islamabad ➔ Doha, Qatar",
    quote: "The bundle service is worth triple the price. The unlimited revisions and personalized consultation on WhatsApp made me feel completely valued. Absolute professional craftsmanship!"
  }
];
