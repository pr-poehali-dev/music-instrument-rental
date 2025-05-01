
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="font-bold text-2xl text-purple-700">МузАренда</Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="font-medium hover:text-purple-600 transition-colors">Главная</Link>
          <Link to="/" className="font-medium hover:text-purple-600 transition-colors">Каталог</Link>
          <Link to="/" className="font-medium hover:text-purple-600 transition-colors">О нас</Link>
          <Link to="/" className="font-medium hover:text-purple-600 transition-colors">Контакты</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden md:flex">
            Войти
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700">
            Арендовать
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
