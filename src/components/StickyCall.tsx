import { Phone } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const StickyCall = () => {
  return (
    <a
      href={`tel:${siteConfig.phone}`}
      className="fixed bottom-4 right-4 z-50 rounded-full bg-primary text-white p-4 shadow-lg hover:scale-110 transition-transform duration-200 flex md:hidden"
      aria-label={`Zadzwoń ${siteConfig.phone}`}
    >
      <Phone className="w-6 h-6" />
    </a>
  );
};