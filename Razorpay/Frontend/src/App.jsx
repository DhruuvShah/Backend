import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/products/get-item")
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data);

        // Handle different response structures
        if (Array.isArray(data)) {
          setProducts(data);
        } else if (data.products) {
          // If products is an object (single product), convert to array
          if (Array.isArray(data.products)) {
            setProducts(data.products);
          } else if (typeof data.products === "object") {
            setProducts([data.products]); // Wrap single product in array
          }
        } else if (data.data && Array.isArray(data.data)) {
          setProducts(data.data);
        } else {
          setProducts([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  const handleBuyNow = (product) => {
    alert(`Purchasing: ${product.title}`);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading products...</p>
      </div>
    );
  }

  return (
    <div className="app-container">
      <header className="header">
        <h1>Product Store</h1>
        <p>Discover amazing products</p>
      </header>

      <div className="products-grid">
        {products && products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="product-card">
              <div className="card-inner">
                <div className="image-section">
                  <img src={product.image} alt={product.title} />
                </div>

                <div className="details-section">
                  <h2 className="product-title">{product.title}</h2>
                  <p className="product-description">{product.description}</p>
            
                  <div className="bottom-section">
                    <div className="price-display">
                      <span className="currency-symbol">₹</span>
                      <span className="price-amount">
                        {(product.price.amount / 100).toLocaleString("en-IN")}
                      </span>
                    </div>

                    <button
                      className="buy-now-button"
                      onClick={() => handleBuyNow(product)}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-products">
            <p>No products available</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
