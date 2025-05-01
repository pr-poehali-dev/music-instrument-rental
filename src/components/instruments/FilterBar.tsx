
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface FilterBarProps {
  categories: string[];
  onFilterChange: (category: string) => void;
  activeCategory: string;
}

const FilterBar = ({ categories, onFilterChange, activeCategory }: FilterBarProps) => {
  return (
    <div className="flex flex-wrap items-center gap-2 py-4">
      <Button 
        variant={activeCategory === 'all' ? "default" : "outline"} 
        onClick={() => onFilterChange('all')}
        className="rounded-full"
      >
        Все
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          onClick={() => onFilterChange(category)}
          className="rounded-full"
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default FilterBar;
