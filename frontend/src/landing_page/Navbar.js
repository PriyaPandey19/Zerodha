import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("isAuth");
    setIsAuth(auth === "true");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    setIsAuth(false);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#FFF" }}>
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img src="media/images/logo.svg" style={{ width: "25%" }} alt="Logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-lg-0 align-items-center">

            {/* NOT LOGGED IN */}
            {!isAuth && (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-muted" to="/signup">Signup</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-muted" to="/login">Login</Link>
                </li>
              </>
            )}

            {/* LOGGED IN */}
            {isAuth && (
              <li className="nav-item">
                <button
                  className="btn btn-outline-danger btn-sm ms-3"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            )}

            <li className="nav-item">
              <Link className="nav-link text-muted" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-muted" to="/products">Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-muted" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-muted" to="/support">Support</Link>
            </li>

            <li className="nav-item">
              <i className="fa fa-bars fa-lg text-muted ms-4"></i>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
