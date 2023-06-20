import { useState } from 'react'
import { useAuth} from './security/authContext'
import { useNavigate, Link } from "react-router-dom"
import { profiles } from './profilePage'
//import { profiles } from './profilePage'
//import { handleUserNameChange, handlePasswordChange } from './security/authContext'
export default function LoginComponent() {
	const [username, setUserName] = useState()
	const [password, setPassword] = useState()
	const [errmessage, setErrMssg] = useState(false)
	const navigate = useNavigate();
	const auth = useAuth()
	
	
	function handleUserNameChange(event) {
		setUserName(event.target.value)
		// console.log(event.target.value)
	}
	function handlePasswordChange(event) {
		setPassword(event.target.value)
		// console.log(event.target.value)
	}
	function DisplayErrMssg() {
		if (errmessage === true) {
			return <div className="errMssg">enter valid details</div>
		}
	}
	
	function HandleLoginButton() {
		
		if (auth.Login(username,password)) {
			navigate(`/welcome/${username}`) 
	} else
	setErrMssg(true)
	return null;
	//authenticate.setAuthenticationContext(false)
	}
	


	
	
	
	return (
		<div className="container">
			<div className="card">
			<h3>Login</h3>
			<div className="form">
				{auth.authentication && <div className="successMssg" >You have logged in succesfully</div>}
				<DisplayErrMssg />
				<div>
					<label>username</label>
					<input  type="text" name="username" value={username} onChange={handleUserNameChange} />
				</div>
				<div>
					<label>password</label>
					<input type="password" name="password" value={password} onChange={handlePasswordChange} />
				</div>
				<div>
					<button class="m-3 " onClick={HandleLoginButton}>login</button>
					
				</div>
				<div>
					<Link to="/createProfile">create an account</Link>
			   </div>
			   </div>
				</div>
		</div>
	);
}

export function ErrPage() {
	return (

		<div className="ErrPage">Error 404 page cannot be found</div>
	);
}

