import { Advertisement } from "./components/Advertisement/Advertisement";
import { AnimalProducts } from "./components/AnimalProducts/AnimalProducts";
import { Overview } from "./components/Overview/Overview";

export const Main = () => {
  return (
    <div className="my-0">
      <Overview />
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
