export type Project = {
  slug: string;
  name: string;
  description: string;
  platform: "Framer" | "Next.js" | "Webflow";
  liveUrl: string;
  image: string;
  sector: string;
  status: "Live";
};

export const projects: Project[] = [
  { slug: "insight-funders", name: "Insight Funders", liveUrl: "https://insightfunders.com/", image: "/assets/work/insight-funders.jpg", platform: "Framer", sector: "Business finance", status: "Live", description: "A sharp, product-led site for an AI-powered lending marketplace connecting businesses with private credit." },
  { slug: "elysium-communities", name: "Elysium Communities", liveUrl: "https://www.elysiumcommunities.com/", image: "/assets/work/elysium-communities.jpg", platform: "Webflow", sector: "Experiential real estate", status: "Live", description: "A narrative-led brand website for a new model of experiential microcities built around wellness and belonging." },
  { slug: "leafy-plate", name: "Leafy Plate", liveUrl: "https://www.leafyplate.co/", image: "/assets/work/leafy-plate.jpg", platform: "Next.js", sector: "Meal delivery", status: "Live", description: "A fresh meal-delivery experience with plan discovery, subscriptions and a clean, conversion-focused ordering journey." },
  { slug: "eleusis-mind", name: "Eleusis Mind", liveUrl: "https://eleusismind.com/", image: "/assets/work/eleusis-mind.jpg", platform: "Framer", sector: "Wellness and research", status: "Live", description: "A refined, immersive digital experience for a pioneering consciousness research and psychedelic immersion centre." },
  { slug: "kris-kelly", name: "Kris Kelly", liveUrl: "https://www.kriskelly.co/", image: "/assets/work/kris-kelly.jpg", platform: "Framer", sector: "Personal brand and wellness", status: "Live", description: "A cinematic personal platform bringing breathwork, music and somatic practice together in one expressive experience." },
  { slug: "meagan-perkins", name: "Meagan Perkins", liveUrl: "https://meaganperkins.co/", image: "/assets/work/meagan-perkins.jpg", platform: "Framer", sector: "Regenerative practice", status: "Live", description: "A warm editorial website for Rooted Regeneration, pairing a grounded visual system with clear programme pathways." },
  { slug: "elite-b-car", name: "Elite B Car", liveUrl: "https://www.elitebcar.com/", image: "/assets/work/elite-b-car.jpg", platform: "Next.js", sector: "Chauffeur and corporate travel", status: "Live", description: "A premium chauffeur-service website for New York travel, corporate transport and special-event bookings." },
  { slug: "elysium-experiential-real-estate", name: "Elysium Experiential Real Estate", liveUrl: "https://live.elysiumcommunities.com/experiential-real-estate", image: "/assets/work/elysium-experiential.jpg", platform: "Next.js", sector: "Experiential real estate", status: "Live", description: "An immersive launch experience introducing Elysium’s vision for community-led experiential real estate." },
  { slug: "savage-and-saint", name: "Savage & Saint", liveUrl: "https://savageandsaint.com/", image: "/assets/work/savage-and-saint.jpg", platform: "Framer", sector: "Men’s mentorship", status: "Live", description: "A bold, character-rich platform for a global men’s mentoring collective focused on vitality, excellence and freedom." },
];
