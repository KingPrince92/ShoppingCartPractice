interface Rating {
  rate: number;
  count: number;
}

export default interface StoreItem {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
