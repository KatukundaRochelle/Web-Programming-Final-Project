import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';
import "./Register.css";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    // e.preventDefault();
    localStorage.setItem("username",username)
    localStorage.setItem("password",password)
    localStorage.setItem("number", number)
    localStorage.setItem("email",email)
  
    const validEmailRegex = /\S+@\S+\.\S+/;
    const validPasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  
    if (username.trim() === "") {
      alert("Please enter a valid username");
      return;
    }
  
    if (!validPasswordRegex.test(password.trim())) {
      alert("Please enter a password that contains at least 8 characters, including uppercase and lowercase letters, and at least one number");
      return;
    }
  
    if (!/^[0-9]+$/.test(number.trim())) {
      alert("Please enter a valid mobile number");
      return;
    }
  
    if (email.trim() === "" || !validEmailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }
  
    alert("Registration successful");
  };
  
  // const navigate = useNavigate();
  return (
    <>
      <div className="card-container">
        <div className="register-card">
          <div className="content">
            <h4>Create your account</h4>

            <form onSubmit={handleSubmit}>
              <div class="input-wrapper">
                {/* <label for="username">Username</label> */}
                <input
                  type="text"
                  // id="username"
                  placeholder="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div class="input-wrapper">
                {/* <label for="password">Password</label> */}
                <input
                  type="password"
                  // id="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div class="input-wrapper">
                {/* <label for="number">Mobile Number</label> */}
                <input
                  type="tel"
                  // id="number"
                  placeholder="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>

              <div class="input-wrapper">
                {/* <label for="email">Email</label> */}
                <input
                  type="email"
                  // id="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <button className="submit" type="submit" onClick={handleSubmit}>Register</button>
              <div>
                <div>{localStorage.getItem("username")}</div>
                <div>{localStorage.getItem("password")}</div>
                <div>{localStorage.getItem("number")}</div>
                <div>{localStorage.getItem("email")}</div>
              </div>
            </form>

            <div className="Down">
              <p className="account">
                Already have an account? <a href="/SignIn">SignIn</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;






