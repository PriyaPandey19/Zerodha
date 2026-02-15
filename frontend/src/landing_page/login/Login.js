import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "https://zerodha-7jne.onrender.com/api/auth/login",
        inputValue,
        { withCredentials: true }
      );

      if (data.success) {
        toast.success(data.message, { position: "bottom-right" });

        // ✅ redirect to DASHBOARD app
        setTimeout(() => {
          window.location.href = "https://zerodha-2-i6kd.onrender.com";
        }, 1000);

        // clear form
        setInputValue({ email: "", password: "" });

      } else {
        toast.error(data.message, { position: "bottom-left" });
      }
    } catch (error) {
      toast.error("Login failed");
      console.error(error);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}
    >
      <div
        className="card shadow p-4"
        style={{ width: "100%", maxWidth: "420px", borderRadius: "12px" }}
      >
        <h3 className="text-center mb-4 fw-bold">Login</h3>

        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={email}
              onChange={handleOnChange}
              required
            />
          </div>

          <div className="form-group mb-4">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={handleOnChange}
              required
            />
          </div>

          <button className="btn btn-primary w-100">Login</button>
        </form>

        <ToastContainer />

        <p className="text-center mt-3">
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
