import { Container, Row, Col, Button } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
     
      <div className="hero-section text-center text-white d-flex align-items-center">
        <Container>
          <h1 className="hero-title">Farm Fresh Mangoes 🥭</h1>
          <p className="hero-sub">
            Direct from farmers to your home — pure, natural & organic
          </p>
          <Button variant="success" size="lg" className="hero-btn">
            Shop Now
          </Button>
        </Container>
      </div>

      {/* 🥭 PRODUCT SECTION */}
      <Container className="my-5">
        <h2 className="section-title text-center mb-4">
          Our Mango Collection
        </h2>

        <Row>
          {products.length === 0 ? (
            <h5 className="text-center">No products available</h5>
          ) : (
            products.map((p) => (
              <Col key={p._id} xs={12} md={6} lg={4} className="mb-4">
                <ProductCard product={p} />
              </Col>
            ))
          )}
        </Row>
      </Container>
    </>
  );
}
