import cats from "./src/assets/images/animals/cats.png";
import dogs from "./src/assets/images/animals/dogs.png";
import birds from "./src/assets/images/animals/birds.png";
import little from "./src/assets/images/animals/little.png";
import reptiles from "./src/assets/images/animals/reptiles.png";

import { ROUTES } from "./routes";

export const ANIMALS = [
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
