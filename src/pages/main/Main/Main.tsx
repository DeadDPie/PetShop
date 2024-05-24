import { useGetProductByIdQuery } from "@/shared/api/hooks/useGetProductByIdQuery";
import { Advertisement } from "./components/Advertisement/Advertisement";
import { AnimalProducts } from "./components/AnimalProducts/AnimalProducts";
import { Overview } from "./components/Overview/Overview";
import { Recomendation } from "./components/Recomendation/Recomendation";

export const Main = () => {
  const get = useGetProductByIdQuery({ id: "1" });
  console.log(get, get.data);
  return (
    <div className="my-0">
      <Overview />
      <div className="sm:hidden">
        <Advertisement />
      </div>
      <AnimalProducts />
      <Recomendation />
      <div className="hidden sm:block">
        <Advertisement />
      </div>
    </div>
  );
};
