import { Phone } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { useIsMobile } from "@/hooks/use-mobile";

export const StickyCall = () => {
  const isMobile = useIsMobile();
  
  if (!isMobile) return null;

  return (
    <a
      href={`tel:${siteConfig.phone}`}
      className="fixed bottom-4 right-4 z-50 rounded-full bg-primary text-white p-4 shadow-lg hover:scale-110 transition-transform duration-200"
      aria-label={`Zadzwoń ${siteConfig.phone}`}
    >
      <Phone className="w-6 h-6" />
    </a>
  );
};