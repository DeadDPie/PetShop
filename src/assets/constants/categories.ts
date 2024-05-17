import food from "@/assets/images/categories/food.png";
import clothes from "@/assets/images/categories/clothes.png";
import beds from "@/assets/images/categories/beds.png";
import toys from "@/assets/images/categories/toys.png";
import fillers from "@/assets/images/categories/fillers.png";

import { ROUTES } from "./routes";

export const CATEGORIES = [
  {
    image: food,
    title: "Корм и лакомства",
    route: ROUTES.CATEGORIES.FOOD,
  },
  {
    image: clothes,
    title: "Одежда и амуниция",
    route: ROUTES.CATEGORIES.CLOTHES,
  },
  {
    image: beds,
    title: "Лежанки и миски",
    route: ROUTES.CATEGORIES.BEDS,
  },
  {
    image: toys,
    title: "Игрушки",
    route: ROUTES.CATEGORIES.TOYS,
  },
  {
    image: fillers,
    title: "Наполнители и лотки",
    route: ROUTES.CATEGORIES.FILLERS,
  },
];
