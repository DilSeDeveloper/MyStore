import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct({
          id: data.id,
          name: data.title,
          price: data.price,
          image: data.image,
          description: data.description,
        });
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h3>Loading...</h3>;
  if (!product) return <h3>Product not found</h3>;

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
