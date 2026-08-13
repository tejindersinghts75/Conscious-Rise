import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
export const metadata: Metadata = { title: "Privacy Policy", description: "How Conscious Rise handles personal information.", alternates: { canonical: "/privacy" }, openGraph: { url: "/privacy", title: "Privacy Policy | Conscious Rise", description: "How Conscious Rise handles personal information.", images: ["/og-image.jpg"] } };
export default function PrivacyPage() { return <LegalPage title="Privacy policy" updated="8 August 2026" sections={[
  ["Please review this policy", "This is a practical starting policy for a one-person web development studio. Have it reviewed by a qualified legal professional before relying on it."],
  ["Information collected", "When you contact Conscious Rise, the information may include your name, email address, company, project requirements, budget range and target timeline. Basic technical logs may also be created by the hosting provider."],
  ["How information is used", "Information is used only to respond to enquiries, assess potential projects, deliver agreed services, maintain business records and meet legal obligations."],
  ["Retention and deletion", "Enquiry information is normally kept for up to 24 months unless a longer period is required for an active client relationship, accounting or legal compliance. You may request access, correction or deletion by using the contact email shown on this site."],
  ["Sharing and international processing", "Information is not sold. It may be processed by essential service providers such as email, hosting, analytics and project-management platforms, which may operate in India, the UK, EU or US."],
  ["Your rights", "Depending on where you live, you may have rights to access, correct, restrict, export or delete your personal information, and to object to certain processing."],
]} />; }
