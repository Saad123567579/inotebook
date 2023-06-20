import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ name:"",email:"", password:""});
  const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }
  const handleClick =async (e) => {
        e.preventDefault();
        const {name,email,password} = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser",{
            method:"POST",
            headers: { 'Content-Type':'application/json'},
            body: JSON.stringify({name,email,password})
        })
        const json = await response.json();
        if (response.ok) {
            localStorage.setItem('token', json.authToken); // Assuming the token is returned in the response
            navigate('/');
          } 


   } 
  return (
    <div className="container">
        <form>
        <div className="mb-3">
    <label htmlFor="name" className="form-label">Username</label>
    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" name="name"  onChange={handleChange}/>
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name="email" onChange={handleChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name="password" onChange={handleChange}/>
  </div>
  
  <button type="submit" className="btn btn-primary" onClick={handleClick}>Sign Up</button>
</form>
      
    </div>
  )
}

export default Signup
