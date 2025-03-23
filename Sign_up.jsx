import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function Sign_up() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Basic Validation
      if (!name || !email || !password) {
        setMessage('All fields are required!');
        return;
      }
  
      // Placeholder for backend API call
      console.log('User Registered:', { name, email, password });
      setMessage('Registration successful!');
  
      // Clear form
      setName('');
      setEmail('');
      setPassword('');
    };
    
  return (
    <>
         <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg p-4">
            <h2 className="text-center mb-4">Sign Up</h2>
            {message && (
              <div className="alert alert-info text-center" role="alert">
                {message}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="example@domain.com"
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
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Sign_up
