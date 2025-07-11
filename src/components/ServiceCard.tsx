import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  link: string;
  description?: string;
  variant?: "home" | "catalog";
}

export const ServiceCard = ({ title, link, description, variant = "home" }: ServiceCardProps) => {
  const getDescription = () => {
    if (!description) return "";
    
    if (variant === "home") {
      return description.length > 50 ? `${description.substring(0, 50)}...` : description;
    } else {
      return description.length > 100 ? `${description.substring(0, 100)}...` : description;
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-lg">
          <Link 
            to={link} 
            className="hover:text-blue transition-colors"
            title={`${title} w Pile`}
          >
            {title}
          </Link>
        </CardTitle>
        {getDescription() && (
          <CardDescription>{getDescription()}</CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <Link 
          to={link}
          className="text-blue hover:underline text-sm font-medium"
          title={`${title} w Pile`}
        >
          Dowiedz się więcej →
        </Link>
      </CardContent>
    </Card>
  );
};