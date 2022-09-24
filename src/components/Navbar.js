import { Link } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Site Name</h1>
      <ul className="links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/games">Browse</Link></li>
        <li><Link to="/sign-in">Sign in</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
