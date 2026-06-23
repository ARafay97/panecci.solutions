export type Tier = {
  id: string;
  no: string;
  name: string;
  tag: string;
  price: string;
  per: string;
  features: string[];
  theme: "t1" | "t2" | "t3" | "t4";
  flag?: string;
  video?: string;
};

export const tiers: Tier[] = [
  {
    id: "starter",
    no: "01 · STARTER",
    name: "Starter",
    tag: "A clean, fast site that makes you look established.",
    price: "£15",
    per: "/month",
    features: [
      "Up to 5 pages, fully responsive",
      "Hosting + SSL included",
      "Contact form & Google Maps",
      "Basic SEO setup",
      "1 content update / month",
    ],
    theme: "t1",
    video: "/video.mp4",
  },
  {
    id: "business",
    no: "02 · BUSINESS",
    name: "Business",
    tag: "Front end + back end. A site that actually does things.",
    price: "£49",
    per: "/month",
    features: [
      "Everything in Starter",
      "Database & backend",
      "Customer enquiry storage",
      "Dynamic content",
      "Advanced forms",
    ],
    theme: "t2",
    video: "/video.mp4",
  },
  {
    id: "pro",
    no: "03 · PRO",
    name: "Pro",
    tag: "Your own portal — manage customers and bookings.",
    price: "£99",
    per: "/month",
    features: [
      "Everything in Business",
      "Full admin dashboard",
      "Login & customer management",
      "Booking system",
      "Analytics dashboard",
    ],
    theme: "t3",
    video: "/video.mp4",
  },
  {
    id: "ai",
    no: "04 · AI ASSISTANT",
    name: "AI",
    tag: "A site that answers customers and captures leads on its own.",
    price: "£199",
    per: "/month",
    features: [
      "Everything in Pro",
      "AI chatbot + knowledge base",
      "Lead qualification & FAQ automation",
      "Automated customer support",
      "Email automation",
    ],
    theme: "t4",
    flag: "AI",
    video: "/video.mp4",
  },
];