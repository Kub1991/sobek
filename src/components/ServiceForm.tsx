import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface ServiceFormProps {
  serviceName: string;
}

export const ServiceForm = ({ serviceName }: ServiceFormProps) => {
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    problem: "",
    preferredDate: ""
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would integrate with Supabase
    toast({
      title: "Rezerwacja wysłana!",
      description: "Skontaktujemy się z Państwem w ciągu 15 minut.",
    });
    
    setFormData({ brand: "", model: "", problem: "", preferredDate: "" });
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100">
      <h3 className="text-xl font-bold text-foreground mb-4">
        Umów wizytę - {serviceName}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <Input
            placeholder="Marka samochodu"
            value={formData.brand}
            onChange={(e) => setFormData({...formData, brand: e.target.value})}
            required
          />
          <Input
            placeholder="Model samochodu"
            value={formData.model}
            onChange={(e) => setFormData({...formData, model: e.target.value})}
            required
          />
        </div>
        <Textarea
          placeholder="Opisz problem..."
          value={formData.problem}
          onChange={(e) => setFormData({...formData, problem: e.target.value})}
          required
        />
        <Input
          type="date"
          value={formData.preferredDate}
          onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
          required
        />
        <Button type="submit" variant="primary" className="w-full">
          Umów wizytę
        </Button>
      </form>
    </div>
  );
};