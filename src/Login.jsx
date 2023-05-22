import React,{useState} from "react";
export const Login =(props)=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
    }

    return(
        <div className="auth-form-container">
            <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="youremail@gmail.com" id="email" name="email"></input>
            <label htmlFor="password">Password</label>
            <input value={password}  onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Enter Your Password" id="password" name="password"></input>
            <button type="submit">Log In</button>
        </form>
        <button  className="link-btn" onClick={()=>props.onFormSwitch('register')}>Don't have an account? Reister Hear</button>
        </div>
    )
}