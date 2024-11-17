import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";


function SignUpForm() {



const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
const handleSubmit= async (e)=>{
e.preventDefault()
try{
 await createUserWithEmailAndPassword(auth,email, password)
 alert("account created successfully")
 
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
          <h2 className="text-center mb-4">Sign Up</h2>
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
          <button type="submit" className="btn btn-primary w-100">Sign Up</button>
          <div className="text-center mt-3">
            <p className="mb-1">Already Registered?</p>
            <Link to="/login" className="text-decoration-none">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}


export default SignUpForm;
