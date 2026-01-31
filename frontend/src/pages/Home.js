import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState([]); // ✅ initialize as empty array

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">
        Fresh Mangoes Direct From Farmers
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
  );
}
