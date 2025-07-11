import { Button as ShadcnButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ButtonProps } from "@/components/ui/button";

interface CustomButtonProps extends Omit<ButtonProps, 'variant'> {
  variant?: "primary" | "secondary" | "outline";
}

export const Button = ({ 
  children, 
  className, 
  variant = "primary", 
  ...props 
}: CustomButtonProps) => {
  const variants = {
    primary: "bg-gradient-hero text-white hover:shadow-blue transition-all duration-300 transform hover:scale-105",
    secondary: "bg-secondary text-foreground hover:bg-muted",
    outline: "border-2 border-blue text-blue hover:bg-blue hover:text-white"
  };

  return (
    <ShadcnButton
      className={cn(
        "font-semibold py-3 px-6 rounded-lg transition-all duration-300",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </ShadcnButton>
  );
};