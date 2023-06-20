import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "./security/authContext";

export default function CreateProfile() {
    const [fullname, setFullname] = useState(null)
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [feedback, setfeedback] = useState(null)
    const navigate = useNavigate();
    const auth = useAuth()
        
   
    function handleNameChange(event) {
        setFullname(event.target.value)
       
        
    }
    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }
    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }
   
    function setUpProfile() {
        if (fullname !== null && username !== null && password !== null) {
            auth.createProfile(fullname, username, password)
            navigate('/success')
          
        }else setfeedback(<Failed/>)
    }
    function Failed() {
        return (
            <div className="Failed">please input correct credentials to create account</div>
        )
    }
    
    return (
        <div className="container">
        <div className="form form-control">
            <h4>Create Dummy Profile to Explore </h4>
            {feedback }
            <div>
                <label>Fullname</label>
                    <input className="form-control" type="text" name="fullname" value={fullname} onChange={handleNameChange} />
            </div>
            <div>
                <label>Username</label>
                    <input className="form-control" type="text" name="username" value={username} onChange={handleUsernameChange} />
            </div>
            <div>
                <label>Password</label>
                    <input className="form-control" type="password" name="password" value={password} onChange={handlePasswordChange} />
            </div>
            <div>
                <button className= "m-3"   onClick={setUpProfile} > create</button>
            </div>
            <div>
                <Link to="/login"> Already have an account? login  </Link>
            </div>

            </div>
        </div>
       )
}
export function SuccessMessages() {
    return (
        <div className="notificationmessages">Account created succesfully, please login with your credentials</div>
    )
}