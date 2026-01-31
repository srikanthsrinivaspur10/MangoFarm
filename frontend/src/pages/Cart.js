import { Container, Table, Button, Card } from "react-bootstrap";
import { useState } from "react";

export default function Cart() {
  const [cartItems] = useState([
    {
      _id: "1",
      name: "Alphonso Mango",
      price: 300,
      qty: 2
    },
    {
      _id: "2",
      name: "Banganapalli Mango",
      price: 200,
      qty: 1
    }
  ]);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <Container className="my-4">
      <Card className="shadow-sm p-3">
        <h3 className="mb-3">🛒 Your Cart</h3>

        <Table responsive bordered hover>
          <thead className="table-success">
            <tr>
              <th>Mango</th>
              <th>Price (₹)</th>
              <th>Quantity</th>
              <th>Total (₹)</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.qty}</td>
                <td>{item.price * item.qty}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <h5 className="text-end">
          Grand Total: <span className="text-success">₹{total}</span>
        </h5>

        <div className="text-end">
          <Button variant="success" size="lg">
            Proceed to Payment
          </Button>
        </div>
      </Card>
    </Container>
  );
}
