
import { useState } from "react";
import Header from "@/components/ui/Header";
import Banner from "@/components/ui/Banner";
import InstrumentGrid from "@/components/instruments/InstrumentGrid";
import FilterBar from "@/components/instruments/FilterBar";
import { InstrumentCardProps } from "@/components/instruments/InstrumentCard";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const instruments: InstrumentCardProps[] = [
    {
      id: 1,
      title: "Электрогитара Fender Stratocaster",
      category: "Струнные",
      imageUrl: "https://images.unsplash.com/photo-1550985616-10810253b84d?q=80&w=2574",
      pricePerDay: 1200,
      isAvailable: true,
    },
    {
      id: 2,
      title: "Акустическая гитара Yamaha",
      category: "Струнные",
      imageUrl: "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?q=80&w=2670",
      pricePerDay: 800,
      isAvailable: true,
    },
    {
      id: 3, 
      title: "Синтезатор Roland",
      category: "Клавишные",
      imageUrl: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=2670",
      pricePerDay: 1500,
      isAvailable: false,
    },
    {
      id: 4,
      title: "Барабанная установка Pearl",
      category: "Ударные",
      imageUrl: "https://images.unsplash.com/photo-1543443258-92b04ad5ec6b?q=80&w=2670",
      pricePerDay: 2000,
      isAvailable: true,
    },
    {
      id: 5,
      title: "Скрипка Yamaha",
      category: "Струнные",
      imageUrl: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?q=80&w=2670",
      pricePerDay: 900,
      isAvailable: true,
    },
    {
      id: 6,
      title: "Саксофон Yamaha",
      category: "Духовые",
      imageUrl: "https://images.unsplash.com/photo-1573871669414-010dbf73ca84?q=80&w=2670",
      pricePerDay: 1300,
      isAvailable: true,
    },
    {
      id: 7,
      title: "Цифровое пианино Casio",
      category: "Клавишные",
      imageUrl: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=2670",
      pricePerDay: 1800,
      isAvailable: true,
    },
    {
      id: 8,
      title: "Укулеле Kala",
      category: "Струнные",
      imageUrl: "https://images.unsplash.com/photo-1619730318848-43c3839ce11e?q=80&w=2670",
      pricePerDay: 500,
      isAvailable: true,
    },
  ];

  const categories = Array.from(new Set(instruments.map(item => item.category)));
  
  const handleFilterChange = (category: string) => {
    setActiveCategory(category);
  };

  const filteredInstruments = activeCategory === 'all' 
    ? instruments 
    : instruments.filter(instrument => instrument.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Banner />
      
      <main className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Наши инструменты</h2>
        
        <FilterBar 
          categories={categories} 
          onFilterChange={handleFilterChange} 
          activeCategory={activeCategory} 
        />
        
        <InstrumentGrid instruments={filteredInstruments} />
      </main>
      
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">МузАренда</h3>
              <p className="text-gray-300">
                Аренда качественных музыкальных инструментов для профессионалов и любителей.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4">Контакты</h3>
              <p className="text-gray-300">Москва, ул. Музыкальная, 42</p>
              <p className="text-gray-300">+7 (999) 123-45-67</p>
              <p className="text-gray-300">info@muzarenda.ru</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4">Режим работы</h3>
              <p className="text-gray-300">Пн-Пт: 10:00 - 20:00</p>
              <p className="text-gray-300">Сб: 11:00 - 18:00</p>
              <p className="text-gray-300">Вс: выходной</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            &copy; {new Date().getFullYear()} МузАренда. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
