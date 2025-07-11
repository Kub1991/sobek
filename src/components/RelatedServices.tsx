import { ServiceCard } from "@/components/ServiceCard";
import { siteConfig } from "@/config/siteConfig";

interface RelatedServicesProps {
  currentSlug: string;
  parentCategory: string;
}

export const RelatedServices = ({ currentSlug, parentCategory }: RelatedServicesProps) => {
  // pobierz 3 losowe usługi z tej samej kategorii, oprócz bieżącej
  const relatedServices = siteConfig.services
    .filter(
      (service) => service.parentCategorySlug === parentCategory && service.slug !== currentSlug
    )
    .slice(0, 3);

  if (!relatedServices.length) return null;

  const categoryName = siteConfig.categories.find(cat => cat.slug === parentCategory)?.name || parentCategory;

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold text-foreground mb-6">
        Powiązane usługi {categoryName.toLowerCase()}
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {relatedServices.map((service) => (
          <ServiceCard
            key={service.slug}
            title={service.name}
            link={`/uslugi/${service.slug}-${siteConfig.slugBase}`}
          />
        ))}
      </div>

      <div className="mt-6">
        <a
          href={`/uslugi/${parentCategory}-${siteConfig.slugBase}`}
          className="text-orange font-medium hover:underline"
        >
          Zobacz wszystkie usługi z kategorii {categoryName.toLowerCase()} →
        </a>
      </div>
    </section>
  );
};