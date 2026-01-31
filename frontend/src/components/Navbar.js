import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaSignInAlt, FaSignOutAlt, FaShoppingCart } from "react-icons/fa";

export default function AppNavbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("auth") === "true";

  const handleLogout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Navbar bg="success" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">MangoFarm 🥭</Navbar.Brand>

        <Nav className="ms-auto align-items-center">

          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/cart">
            <FaShoppingCart /> Cart
          </Nav.Link>

          {!isLoggedIn ? (
            <>
              <Nav.Link as={Link} to="/login">
                <FaSignInAlt /> Login
              </Nav.Link>
              <Nav.Link as={Link} to="/signup">
                <FaUser /> Signup
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
              <Nav.Link onClick={handleLogout}>
                <FaSignOutAlt /> Logout
              </Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}
