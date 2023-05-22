import React,{useState} from "react";
export const Register =(props)=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
    }

    return(
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Enter Your Full Name" id="name" name="name"></input>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="youremail@gmail.com" id="email" name="email"></input>
            <label htmlFor="password">Password</label>
            <input value={password}  onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Enter Your Password" id="password" name="password"></input>
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={()=>props.onFormSwitch('Login')}>Already have an account? Login Hear</button>
        </div>
    )

}