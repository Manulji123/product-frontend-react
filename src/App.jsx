import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000/api";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [cartCount, setCartCount] = useState(0);

  // Fetch products from Laravel API once when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/products`);
        setProducts(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const term = searchTerm.toLowerCase();
    return (
      product.name.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term)
    );
  });

  return (
    <div className="page">
      {/* ======= HEADER / NAVBAR ======= */}
      <header className="navbar">
        <div className="navbar-left">
          <div className="logo">
            <img src="https://www.aahaas.com/assets/images/icon/logo.png" alt="Aahaas logo" />
          </div>
        </div>

        <div className="navbar-center">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="navbar-right">
          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#products">Products</a>
          </nav>
          <button className="cart-btn" type="button">
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{cartCount}</span>
          </button>
        </div>
      </header>

      {/* ======= MAIN CONTENT ======= */}
      <main>
        <section className="hero" id="home">
          <div className="hero-text">
            <p className="hero-tagline">Premium quality</p>
            <h1>
              <span>For your&nbsp;</span>
              <span className="accent">lifestyle</span>
            </h1>
            <p className="hero-subtitle">
              Discover the latest trends in technology and fashion. Aahaas Ecommerce brings you curated products at unbeatable prices.
            </p>
            <a href="#products" className="hero-btn">
              Shop Now
            </a>
          </div>

          <div className="hero-image-wrapper">
            <img src="https://images.pexels.com/photos/3756345/pexels-photo-3756345.jpeg" alt="Happy couple shopping online" />
          </div>
        </section>

        {/* PRODUCTS SECTION */}
        <section className="products-section" id="products">
          <div className="products-header">
            <h2>Featured Products</h2>
            <p>
              Discover a hand-picked selection of favourites from Aahaas. These products are served live from your Laravel API and update as your catalogue grows.
            </p>
          </div>

          {loading && (
            <p className="status-message">Loading products, please wait…</p>
          )}

          {error && <p className="status-message error">{error}</p>}

          {!loading && !error && filteredProducts.length === 0 && (
            <p className="status-message">
              No products match your search yet. Try a different keyword.
            </p>
          )}

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <article className="product-card" key={product.id}>
                <div className="product-image-wrapper">
                  <img src={product.image_url} alt={product.name} />
                </div>

                <div className="product-body">
                  <h3>{product.name}</h3>
                  <p className="product-description">
                    {product.description.length > 80
                      ? product.description.slice(0, 80) + "..."
                      : product.description}
                  </p>
                </div>

                <div className="product-footer">
                  <span className="product-price">
                    Rs. {Number(product.price).toLocaleString()}
                  </span>
                  <button
                    type="button"
                    className="add-to-cart-btn"
                    onClick={() => setCartCount((c) => c + 1)}
                  >
                    Add to Cart
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* ======= FOOTER ======= */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Aahaas Ecommerce. All rights reserved.</p>
        <div className="footer-icons">
          <a href="#" aria-label="Facebook" className="footer-icon">
            <svg viewBox="0 0 24 24" className="footer-icon-svg">
              <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-3h2.4V9.5C10.4 7.6 11.9 6 14.3 6c1.1 0 1.9.1 2.2.1v2.6h-1.5c-1.2 0-1.6.7-1.6 1.5V12h2.8l-.5 3h-2.3v7A10 10 0 0 0 22 12z" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram" className="footer-icon">
            <svg viewBox="0 0 24 24" className="footer-icon-svg">
              <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17" cy="7" r="1.2" />
            </svg>
          </a>
          <a href="#" aria-label="Twitter" className="footer-icon">
            <svg viewBox="0 0 24 24" className="footer-icon-svg">
              <path d="M20.5 7.2c.8-.5 1.3-1.2 1.6-2-0.8.4-1.6.7-2.4.8a3.3 3.3 0 0 0-5.7 2.3c0 .3 0 .5.1.8A9.3 9.3 0 0 1 4 5.6a3.3 3.3 0 0 0 1 4.4A3.3 3.3 0 0 1 3.5 9v.1a3.3 3.3 0 0 0 2.7 3.2 3.4 3.4 0 0 1-1.5.1 3.3 3.3 0 0 0 3.1 2.3A6.7 6.7 0 0 1 4 18a9.3 9.3 0 0 0 5 1.5c6 0 9.2-5 9.2-9.2l-.1-.4a6.5 6.5 0 0 0 1.4-2.7z" />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
