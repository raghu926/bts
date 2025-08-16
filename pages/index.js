import { motion } from "framer-motion";
import "../styles.css";

export default function Homepage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };
  const cards = [
    { name: "Birthday", img: "/birthday.jpg" },
    { name: "Anniversary", img: "/anniversary.jpg" },
    { name: "Kids", img: "/kids.jpg" },
    { name: "Corporate", img: "/corporate.jpg" }
  ];
  const products = [
    { name: "Germanium Birthday Surprise", price: "₹5,900", orig: "₹7,000", img: "/germanium.jpg" },
  ];
  return (
    <div>
      <motion.header className="gifymo-header"
        initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0 }}
      >
        <div className="logo">Book<span>the</span>Surprise</div>
        <nav>
          <a href="/">Home</a>
          <a href="/categories">Surprise Categories</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/cart" className="cta">Cart</a>
        </nav>
      </motion.header>
      <main>
        <motion.section className="hero" initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.1 }}>
          <h1>India’s #1 Surprise Party & Gift Platform</h1>
          <p>Personalize, book, and celebrate life's moments with magic!</p>
          <a href="/categories" className="cta-large">Find My Surprise</a>
        </motion.section>
        <motion.section className="occasions" initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.2 }}>
          <h2>Shop by Occasion</h2>
          <div className="tiles">
            {cards.map((card, i) => (
              <motion.div
                className="tile"
                key={card.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + i * 0.08, duration: 0.75 }}
                whileHover={{ scale: 1.04, boxShadow: "0 12px 32px #f76b1c33" }}
              >
                <img src={card.img} alt={card.name} />
                <h3>{card.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.section>
        <motion.section className="trending" initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.3 }}>
          <h2>Trending Surprises</h2>
          <div className="product-row">
            {products.map((prod, i) => (
              <motion.div className="product-card" key={prod.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.7 }}
                whileHover={{ scale: 1.07, boxShadow: "0 12px 32px #f76b1c33" }}
              >
                <img src={prod.img} alt={prod.name}/>
                <h4>{prod.name}</h4>
                <span className="price">{prod.price} <small className="orig">{prod.orig}</small></span>
                <button>Add to Cart</button>
              </motion.div>
            ))}
          </div>
        </motion.section>
        <motion.section className="cta-strip" initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.5 }}>
          <h2>Customize Your Own Surprise</h2>
          <a href="/customize" className="cta-large">Start Now</a>
        </motion.section>
      </main>
      <footer>
        <p>© 2025 BookTheSurprise.com. All rights reserved.</p>
      </footer>
    </div>
  );
}
