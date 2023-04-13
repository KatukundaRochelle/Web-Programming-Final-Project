import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    // event.preventDefault();
    localStorage.setItem("username",username)
    localStorage.setItem("password",password)

    // Add your validation logic here
    const usernameRegex = /^[a-zA-Z0-9]+$/; // Allow only letters and numbers
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/; // Require minimum eight characters, at least one letter, one number, and one special character
    if (!usernameRegex.test(username)) {
      alert("Invalid username. Please enter a valid username.");
      return;
    }
    if (!passwordRegex.test(password)) {
      alert("Invalid password. Please enter a valid password that contains at least eight characters, including one letter and one number.");
      return;
    }

    // Navigate to the welcome page if the user input is valid
    navigate("/WelcomePage");
  };

  return (
    <div className="card-container">
      <div className="login-card">
        <div className="content">
          <h4>Sign in to your account</h4>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <input type="text" name="username" placeholder="username" value={username} onChange={handleUsernameChange} />
            </div>

            <div className="input-wrapper">
              <input type="password"  name="password" placeholder="password" value={password} onChange={handlePasswordChange} />
            </div>

            <button className="submit" type="submit" onClick={handleSubmit}>Sign in</button>
            <div>
            <div>{localStorage.getItem("username")}</div>
            <div>{localStorage.getItem("password")}</div>
            </div>
          </form>

          <div className="Lower">
            <p className="no-account">
              Don't have an account yet? <a href="/Register">Register</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;





