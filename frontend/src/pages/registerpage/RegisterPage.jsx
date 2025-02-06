import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./RegisterPage.css";
import { useSetRecoilState } from "recoil";
import userAtom from "../../atoms/userAtom";
const RegisterPage = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const setUser = useSetRecoilState(userAtom);
  const handleSignup = async () => {
    try {
      const res = await fetch("http://localhost:7000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });
      const data = await res.json();

      alert("regsiterd!!");
      console.log(data)
      localStorage.setItem("users", JSON.stringify(data));
      setUser(data);
    } catch (error) {
     console.error(error)
    }
  };
  return (
    <div className="container">
      <div className="form">
        <h1 className="heading">Create Account</h1>

        <div className="form-group">
          <label className="label" htmlFor="username">
            Username
          </label>
          <input
            className="input"
            type="text"
            id="username"
            value={inputs.username}
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            className="input"
            type="email"
            id="email"
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            className="input"
            type="password"
            id="password"
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />
        </div>

        <button className="button" onClick={handleSignup}>
          Sign Up
        </button>

        <Link to="/login" className="link">
          Already have an account? Login here
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
