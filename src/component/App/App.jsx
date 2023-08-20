import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from '../Auth/Signup';
import LogIn from '../Auth/LogIn';
import Home from '../HomePage/Home';
import Admin from '../Dashboard/NavBar/Admin';
import '../App/App.css';

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}
