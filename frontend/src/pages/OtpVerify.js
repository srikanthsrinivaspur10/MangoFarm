import { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

export default function OtpVerify() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email;

  const handleVerify = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/verify-otp", {
        email,
        otp,
      });

      // 🔐 Save login status
      localStorage.setItem("auth", "true");
      localStorage.setItem("token", res.data.token);

      alert("Login Successful 🎉");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.msg || "Invalid OTP");
    }
  };

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card style={{ width: "400px" }} className="p-4">
        <h3 className="text-center">Enter OTP</h3>

        <Form onSubmit={handleVerify}>
          <Form.Group className="mb-3">
            <Form.Label>OTP</Form.Label>
            <Form.Control
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </Form.Group>

          <Button type="submit" className="w-100" variant="success">
            Verify OTP
          </Button>
        </Form>
      </Card>
    </Container>
  );
}
