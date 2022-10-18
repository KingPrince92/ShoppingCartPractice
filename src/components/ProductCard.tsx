import StoreItem from "../Models/StoreItem";
import "./ProductCard.css";

interface Props {
  item: StoreItem;
}
const ProductCard = ({ item }: Props) => {
  return (
    <li className="ProductCard">
      <p className="card-title">{item.title}</p>
      <img className="product-image" src={item.image} />
    </li>
  );
};

export default ProductCard;
