import { Advertisement } from "./components/Advertisement/Advertisement";
import { AnimalProducts } from "./components/AnimalProducts/AnimalProducts";

export const Main = () => {
  return (
    <div>
      <div className="sm:hidden">
        <Advertisement />
      </div>
      <AnimalProducts />
      <div className="hidden sm:block">
        <Advertisement />
      </div>
    </div>
  );
};
