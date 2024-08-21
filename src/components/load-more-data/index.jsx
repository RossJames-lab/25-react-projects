import { useState, useEffect } from "react";
import './styles.css';

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [disableButton, setDisableButton] = useState(false);
  const [count, setCount] = useState(0);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count * 20}`
      );
      const result = await response.json();

      if (result?.products?.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
      }

      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products.length === 100) {
      setDisableButton(true);
    }
  }, [products]);

  if (loading) {
    return <div>Loading data! Please wait.</div>;
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products.map((item) => (
          <div className="product" key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      <div className="button-container">
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load More Products
        </button>
        {disableButton && <p>You have reached 100 products</p>}
      </div>
    </div>
  );
}
