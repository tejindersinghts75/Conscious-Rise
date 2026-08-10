import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Conscious Rise",
    short_name: "Conscious Rise",
    description: "Web development studio for startups and agencies.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#4a0d1d",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
