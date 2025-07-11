import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

interface ServiceBreadcrumbProps {
  categoryName?: string;
  categorySlug?: string;
  serviceName?: string;
}

export const ServiceBreadcrumb = ({ 
  categoryName, 
  categorySlug, 
  serviceName 
}: ServiceBreadcrumbProps) => {
  return (
    <Breadcrumb className="mb-6">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/">Strona główna</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {categoryName && categorySlug && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {serviceName ? (
                <BreadcrumbLink asChild>
                  <Link to={`/uslugi/${categorySlug}-pila`}>{categoryName}</Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{categoryName}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
          </>
        )}
        {serviceName && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{serviceName}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};