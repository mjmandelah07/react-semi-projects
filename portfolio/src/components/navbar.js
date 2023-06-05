import { Outlet, Link } from "react-router-dom";


const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg">
      <div className="container">
      <Link className='navbar-brand logo' to="/">MjAramide</Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
          <i class="fa fa-bars" aria-hidden="true"></i>
          </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
            <Link className="nav-link"  to="/">HOME</Link>              
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/about">ABOUT</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/services">SERVICES</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/portfolio">PORTFOLIO</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <Outlet />
    </>
  );
};

export default Navbar;
