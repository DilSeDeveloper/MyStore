import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find(
    (item) => item.id === Number(id)
  );

  return (
    <div className="details">
  <img src={product.image} alt={product.name} />

  <div className="info">
    <h2>{product.name}</h2>
    <p className="price">₹{product.price}</p>
    <p>{product.description}</p>

    <button onClick={() => addToCart(product)}>
      Add to Cart
    </button>
  </div>
</div>

  );
}

export default ProductDetails;
