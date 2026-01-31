import { Container, Table, Badge, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/orders")
      .then((res) => setOrders(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container className="my-4">
      <Card className="shadow-sm p-3">
        <h3 className="mb-3">📦 My Orders</h3>

        <Table responsive striped bordered hover>
          <thead className="table-success">
            <tr>
              <th>Order ID</th>
              <th>Amount (₹)</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center">
                  No orders found
                </td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.totalAmount}</td>
                  <td>
                    <Badge bg="info">{order.status}</Badge>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Card>
    </Container>
  );
}
