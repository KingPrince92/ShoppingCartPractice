import StoreItem from "../Models/StoreItem";
import "./ProductCard.css";

interface Props {
  item: StoreItem;
  key: number;
}
const ProductCard = ({ item }: Props) => {
  let addToCart = require("../assets/add-to-cart.png");
  let removeFromCart = require("../assets/remove.png");

  return (
    <li className="ProductCard">
      <p className="card-title">{item.title}</p>
      <img className="product-image" src={item.image} />
      <p className="product-price">${item.price.toFixed(2)}</p>
      <div className="cart-operations">
        <img className="addToCart-button" src={addToCart}></img>
        <img className="removeFromCart-button" src={removeFromCart}></img>
      </div>
    </li>
  );
};

export default ProductCard;
