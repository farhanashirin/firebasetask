import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";


function Login() {



const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
const handleSubmit= async (e)=>{
e.preventDefault()
try{
 await  signInWithEmailAndPassword (auth,email, password)
 alert("login successfully")
 
}catch(err)
{
  console.error("Error creating account:", err);
    alert(err.message);
}
}



  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: '400px' }}>
        <form onSubmit={handleSubmit}>
          <h2 className="text-center mb-4">Login   </h2>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              placeholder="Enter your email" 
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="password" 
              placeholder="Enter your password" 
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">login</button>
          <div className="text-center mt-3">
            <p className="mb-1">don't have account?
            <Link to="/signup" className="text-decoration-none">Register</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}


export default Login;
