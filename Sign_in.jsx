import { useState } from 'react'
import reactLogo from "../../assets/react.svg";
import viteLogo from "../../assets/vite.svg";
import './App.css'


function Sign_in() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Simple validation
      if (!email || !password) {
        setError("Please fill out all fields.");
        return;
      }
  
      // You can add actual authentication logic here
      console.log("Email:", email);
      console.log("Password:", password);
      setError(""); // Clear error on successful submission
    };

  return (
    <>
         <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card p-4 shadow">
            <h3 className="text-center mb-4">Sign In</h3>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">Sign In</button>
            </form>
            <p className="text-center mt-3">
              Don't have an account? <a href="/sign-up">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Sign_in
