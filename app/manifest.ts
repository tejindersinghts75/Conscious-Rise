import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Conscious Rise",
    short_name: "Conscious Rise",
    description: "Websites, custom web applications, no-code solutions and AI automation for startups and agencies.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#4a0d1d",
    icons: [
      { src: "/assets/conscious-rise-logo-black.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
      { src: "/assets/conscious-rise-logo-black.svg", sizes: "any", type: "image/svg+xml", purpose: "maskable" },
    ],
  };
}
