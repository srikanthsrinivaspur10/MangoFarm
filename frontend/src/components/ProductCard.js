import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={product.image}
        height="200"
        style={{ objectFit: "cover" }}
      />

      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>₹{product.price} / kg</Card.Text>

        <Button
          as={Link}
          to={`/product/${product._id}`}
          variant="success"
        >
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
}
