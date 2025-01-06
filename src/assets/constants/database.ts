import cora from "@/assets/images/items/cora.png";
type Status = "В пути" | "Доставлен" | "В сборке";

interface StatusItem {
  color: string;
  status: Status;
}

export interface TrackeProductProps {
  id: number;
  image: string;
  title: string;
  status: StatusItem;
  adress: string;
}
const delivered: StatusItem = { color: "green", status: "Доставлен" };
const inProcces: StatusItem = { color: "yellow", status: "В пути" };
const inJourney: StatusItem = { color: "primary", status: "В сборке" };
export const TRACKED_PRODUCTS: TrackeProductProps[] = [
  {
    id: 1,
    image: cora,
    title: "Клетчатка для собак 'Кора'",
    status: delivered,
    adress: "пр. Ленина, 20",
  },
  {
    id: 1,
    image: cora,
    title: "Клетчатка для собак 'Кора'",
    status: inProcces,
    adress: "пр. Ленина, 20",
  },
  {
    id: 1,
    image: cora,
    title: "Клетчатка для собак 'Кора'",
    status: inJourney,
    adress: "пр. Ленина, 20",
  },
];
