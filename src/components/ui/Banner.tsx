
import { Button } from "@/components/ui/button";

const Banner = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-600 to-indigo-700 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold text-white mb-4">
            Аренда музыкальных инструментов для любого случая
          </h1>
          <p className="text-lg text-purple-100 mb-8">
            Откройте для себя широкий выбор качественных инструментов по доступным ценам.
            От гитар до фортепиано — у нас есть всё!
          </p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <Button className="bg-white text-purple-700 hover:bg-purple-50 text-lg px-8 py-6">
              Смотреть каталог
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
              Как это работает
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
