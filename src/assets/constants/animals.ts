import cats from "@/assets/images/animals/cats.png";
import dogs from "@/assets/images/animals/dogs.png";
import birds from "@/assets/images/animals/birds.png";
import little from "@/assets/images/animals/little.png";
import reptiles from "@/assets/images/animals/reptiles.png";

import { ROUTES } from "./routes";

interface AnimalProps {
  image: string;
  title: string;
  route: string;
}

export const ANIMALS: AnimalProps[] = [
  {
    image: cats,
    title: "Кошки",
    route: ROUTES.ANIMALS.CATS,
  },
  {
    image: dogs,
    title: "Собаки",
    route: ROUTES.ANIMALS.DOGS,
  },
  {
    image: birds,
    title: "Птицы",
    route: ROUTES.ANIMALS.BIRDS,
  },
  {
    image: little,
    title: "Мелкие животные",
    route: ROUTES.ANIMALS.LITTLE,
  },
  {
    image: reptiles,
    title: "Рептилии",
    route: ROUTES.ANIMALS.REPTILES,
  },
];
