import type { Metadata } from "next";
import { ContactContent } from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach the RebelRoot collective for general inquiries, partnerships, or security disclosures.",
};

export default function ContactPage() {
  return <ContactContent />;
}
