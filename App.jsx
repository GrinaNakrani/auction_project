import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Dashboard from './assets/components/Dashboard';
import Navigation from './components/Navigation';

const Home = () => <h2>Home Page</h2>;
const Auctions = () => <h2>Auctions</h2>;
const MyBids = () => <h2>My Bids</h2>;
const Profile = () => <h2>Profile</h2>;
const Login = () => <h2>Login</h2>;

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
          <Route path="/auctions" element={<Auctions />} />
          <Route path="/my-bids" element={<MyBids />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
      </Routes>
    </Router>

      <Sign_in />
      <Sign_up />
      <Dashboard />
      <Navigation />
    </>
  )
}

export default App
