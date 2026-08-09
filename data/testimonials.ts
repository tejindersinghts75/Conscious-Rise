export type Testimonial = { quote: string; name: string; role: string; company?: string; photo?: string; projectHref?: string };

export const testimonials: Testimonial[] = [
  {
    quote: "Tejinder stepped in and completed a part of my project that other, highly-rated contractors said could not be done.",
    name: "Fynnian M",
    role: "Upwork client",
  },
  {
    quote: "Tejinder was very good in his work. He was always communicating and available. Will recommend him 100%.",
    name: "Hitesh Gilda",
    role: "Upwork client",
  },
  {
    quote: "Working with Tejinder is a breeze. He communicates clearly, responds quickly, and is proactive in his approach. For this project, he is building our Figma designs in Webflow across eight pages. So far, the implementation aligns well with the designs, and he shows good attention to detail in layout and responsiveness for desktop, tablet and mobile. He is structuring the project with reusable classes and setting up the Webflow CMS for Reviews and FAQs clearly. Interactions such as hover states, mobile navigation, and accordions are being implemented as expected. Tejinder is also working on SEO and accessibility, including integrating our accessibility widget for validation across pages. The project is still in progress, but the collaboration has been smooth and professional so far.",
    name: "Turtle Works",
    role: "Upwork client",
  },
];
