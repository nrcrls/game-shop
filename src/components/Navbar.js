import './navbar.css'

const Navbar = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <h1 className="site-title">Site Name</h1>
        <div className="links">
          <a href="/games">Browse</a>
          <a href="/sign-in">Sign in</a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
