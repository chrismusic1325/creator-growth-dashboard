import { Link } from "react-router";

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>

      <Link to="/dashboard">Dashboard</Link>

      <Link to="/social-media">Social Media</Link>

      <Link to="/digital-products">Digital Products</Link>

      <Link to="/analytics">Analytics</Link>

      <Link to="/calendar">Calendar</Link>

      <Link to="/about">About</Link>

      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default NavBar;