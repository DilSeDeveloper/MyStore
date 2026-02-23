import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";
import "./ProductCard.css";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Item added to cart!");
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">₹{product.price}</p>

      <div className="card-buttons">
        <button onClick={handleAddToCart} className="add-btn">
          Add to Cart
        </button>

        <Link to={`/product/${product.id}`} className="details-btn">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;