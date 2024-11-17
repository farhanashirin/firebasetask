import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import SignUpForm from './SignUpForm';
import Login from './Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} /> {/* Redirect / to /signup */}
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
