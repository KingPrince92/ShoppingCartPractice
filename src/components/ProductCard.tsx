import StoreItem from "../Models/StoreItem";
import "./ProductCard.css";

interface Props {
  item: StoreItem;
}
const ProductCard = ({ item }: Props) => {
  return (
    <li className="ProductCard">
      <p>{item.title}</p>
      <img src={item.image} />
    </li>
  );
};

export default ProductCard;
