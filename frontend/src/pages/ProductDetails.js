import { Container, Row, Col, Button, Image, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Rating from "../components/Rating";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <h4 className="text-center mt-4">Loading...</h4>;

  return (
    <Container className="my-4">
      <Card className="shadow-sm p-3">
        <Row>
          <Col md={6} className="text-center">
            <Image
              src={product.image}
              alt={product.name}
              fluid
              rounded
            />
          </Col>

          <Col md={6}>
            <h3>{product.name}</h3>
            <Rating value={product.rating || 4} />
            <h4 className="text-success mt-3">
              ₹{product.price} / kg
            </h4>
            <p className="mt-3">{product.description}</p>

            <Button variant="success" size="lg">
              Add to Cart
            </Button>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}
