import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
export const metadata: Metadata = { title: "Terms of Use", description: "Terms for using the Conscious Rise website.", alternates: { canonical: "/terms" }, openGraph: { url: "/terms", title: "Terms of Use — Conscious Rise", description: "Terms for using the Conscious Rise website.", images: ["/og-image.jpg"] } };
export default function TermsPage() { return <LegalPage title="Terms of use" updated="8 August 2026" sections={[
  ["Please review these terms", "These standard website terms are a practical starting point, not legal advice. Have them reviewed by a qualified legal professional before relying on them."],
  ["Website use", "You may browse this website and contact Conscious Rise for legitimate business purposes. You must not misuse the website, attempt unauthorised access or interfere with its operation."],
  ["Project information", "Portfolio material is provided to illustrate past work. Project availability, scope, pricing and timelines are confirmed only through a separate written proposal or agreement."],
  ["Intellectual property", "Unless stated otherwise, the Conscious Rise brand, original copy and website design are owned by Conscious Rise. Client brands and project materials remain the property of their respective owners."],
  ["No warranty", "The website is provided for general information. While reasonable care is taken, uninterrupted availability and complete accuracy cannot be guaranteed."],
  ["Liability", "To the fullest extent permitted by law, Conscious Rise is not liable for indirect loss arising from use of this website or third-party websites linked from it."],
  ["Governing arrangements", "The governing law and dispute terms for paid work will be set out in the applicable client agreement."],
]} />; }
