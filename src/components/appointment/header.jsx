import { useState } from 'react'
import { Link } from 'react-router-dom'
import {  useAuth } from './security/authContext'

export default function HeaderComponent() {
	
	const auth = useAuth()
	
	

  return (
	 <header className="border-bottom border-light border-5 mb-5 p-2">
		<div className="container">
			<div className="row">
				<nav className="navbar navbar-expand-lg">
					  <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://afeezdigitalspace.netlify.app/" target="_blank">Developer's Website</a>
					<div className = "collapse navbar-collapse">
					  <ul className ="navbar-nav">
							  {auth.authentication && <li className="nav-item"><Link className="nav-link" to="/welcome/:username">Home</Link> </li>}
							  {auth.authentication && <li className="nav-item"><Link className="nav-link" to="/clientBookings">Appointments</Link> </li>}
					  </ul>
					</div>
					<ul className="navbar-nav">
						  {auth.authentication && <li className="nav-item"><Link className="nav-link" to="/logout">logout</Link> </li>}
						  {auth.LoginTab && <li className="nav-item"><Link className="nav-link" to="/login">login</Link> </li>}
					</ul>
				</nav>
            </div>
		 </div>
	 </header>
  )
}