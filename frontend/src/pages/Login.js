import { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Auth.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/login", { email });
      navigate("/otp", { state: { email } });
    } catch (err) {
      alert(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div className="auth-bg">
      <Card className="auth-card">
        <h3 className="auth-title">Login to MangoFarm 🥭</h3>

        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Button type="submit" variant="success" className="w-100">
            Send OTP
          </Button>
        </Form>

        <p className="mt-3 text-center">
          New user? <Link to="/signup">Signup</Link>
        </p>
      </Card>
    </div>
  );
}
