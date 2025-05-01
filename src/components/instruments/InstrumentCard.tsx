
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface InstrumentCardProps {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  pricePerDay: number;
  isAvailable: boolean;
}

const InstrumentCard = ({ title, category, imageUrl, pricePerDay, isAvailable }: InstrumentCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-xs font-medium">
          {category}
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-xl font-bold text-purple-700 mb-2">{pricePerDay} ₽<span className="text-sm text-gray-500 font-normal"> / день</span></p>
        <p className="text-sm text-gray-500">
          {isAvailable ? 'Доступен сейчас' : 'Недоступен'}
        </p>
      </CardContent>
      <CardFooter className="px-4 pb-4 pt-0">
        <Button className="w-full" disabled={!isAvailable}>
          {isAvailable ? 'Арендовать' : 'Недоступен'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default InstrumentCard;
