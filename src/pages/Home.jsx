import "./Home.css";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <div className="home">
      <h2 className="title">Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
