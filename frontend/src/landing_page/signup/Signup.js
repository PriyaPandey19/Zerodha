import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const [inputValue, setInputValue] = useState({
    email: "",
    username: "",
    password: "",
  });

  const { email, username, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const { data } = await axios.post(
      "https://zerodha-7jne.onrender.com/api/auth/signup",
      inputValue,
      { withCredentials: true }
    );

    if (data.success) {
      toast.success(data.message, { position: "bottom-right" });

      // ✅ redirect to dashboard app
      setTimeout(() => {
        window.location.href = "https://zerodha-2-i6kd.onrender.com?token=${token}";  //dashboard url
      }, 1000);

      // ✅ clear form ONLY on success
      setInputValue({ email: "", username: "", password: "" });

    } else {
      toast.error(data.message, { position: "bottom-left" });
    }

  } catch (err) {
    toast.error("Something went wrong");
    console.error(err);
  }
};


  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="card p-4 shadow" style={{ maxWidth: "420px", width: "100%" }}>
        <h3 className="text-center mb-4">Create Account</h3>

        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-3"
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleOnChange}
            required
          />

          <input
            className="form-control mb-3"
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={handleOnChange}
            required
          />

          <input
            className="form-control mb-4"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleOnChange}
            required
          />

          <button className="btn btn-primary w-100">Sign Up</button>
        </form>

        <ToastContainer />

        <p className="text-center mt-3">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
