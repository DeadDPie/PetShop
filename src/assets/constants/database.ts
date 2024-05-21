import cora from "@/assets/images/items/cora.png";

export interface ReviewProps {
  rating: number;
  name: string;
  review: string;
}
export interface ProductProps {
  id: number;
  image: string;
  title: string;
  price: string;
  category: "recomendation" | "cats";
  rating: number;
  brand: string;
  for: string;
  class: string;
  type: string;
  description: string;
  structure: string;
  reviews: ReviewProps[];
}

export const PRODUCTS: ProductProps[] = [
  {
    id: 1,
    category: "recomendation",
    image: cora,
    title: "Клетчатка для собак 'Кора'",
    price: "267",
    rating: 4,
    brand: "Cora Int",
    for: "Взрослые собаки",
    class: "Премиум",
    type: "Сухой корм",
    description: "",
    structure: "",
    reviews: [
      { rating: 4, name: "Ирина", review: "хороший" },
      { rating: 5, name: "Николай", review: "сойдёт" },
    ],
  },
  {
    id: 2,
    category: "recomendation",
    image: cora,
    title: "Клетчатка для собак 'Кора'",
    price: "267",
    rating: 5,
    brand: "Cora Int",
    for: "Взрослые собаки",
    class: "Премиум",
    type: "Сухой корм",
    description: "",
    structure: "",
    reviews: [
      { rating: 5, name: "Николай", review: "сойдёт" },
      { rating: 3, name: "Екатерина", review: "нормальный корм" },
    ],
  },
  {
    id: 3,
    category: "recomendation",
    image: cora,
    title: "Клетчатка для собак 'Кора'",
    price: "267",
    rating: 2,
    brand: "Cora Int",
    for: "Взрослые собаки",
    class: "Премиум",
    type: "Сухой корм",
    description: "",
    structure: "",
    reviews: [{ rating: 5, name: "Николай", review: "сойдёт" }],
  },
  {
    id: 4,
    category: "recomendation",
    image: cora,
    title: "Клетчатка для собак 'Кора'",
    price: "267",
    rating: 3,
    brand: "Cora Int",
    for: "Взрослые собаки",
    class: "Премиум",
    type: "Сухой корм",
    description: "",
    structure: "",
    reviews: [
      { rating: 4, name: "Ирина", review: "хороший" },
      { rating: 5, name: "Николай", review: "сойдёт" },
    ],
  },
  {
    id: 5,
    category: "recomendation",
    image: cora,
    title: "Клетчатка для собак 'Кора'",
    price: "267",
    rating: 4,
    brand: "Cora Int",
    for: "Взрослые собаки",
    class: "Премиум",
    type: "Сухой корм",
    description: "",
    structure: "",
    reviews: [
      { rating: 4, name: "Олег", review: "мой кот не стал есть" },
      { rating: 5, name: "Николай", review: "сойдёт" },
    ],
  },
  {
    id: 6,
    category: "recomendation",
    image: cora,
    title: "Клетчатка для собак 'Кора'",
    price: "267",
    rating: 4,
    brand: "Cora Int",
    for: "Взрослые собаки",
    class: "Премиум",
    type: "Сухой корм",
    description: "",
    structure: "",
    reviews: [
      { rating: 5, name: "Николай", review: "сойдёт" },
      { rating: 3, name: "Екатерина", review: "нормальный корм" },
    ],
  },
  {
    id: 7,
    category: "recomendation",
    image: cora,
    title: "Клетчатка для собак 'Кора'",
    price: "267",
    rating: 4,
    brand: "Cora Int",
    for: "Взрослые собаки",
    class: "Премиум",
    type: "Сухой корм",
    description: "",
    structure: "",
    reviews: [{ rating: 5, name: "Николай", review: "сойдёт" }],
  },
];
