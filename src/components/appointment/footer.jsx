import { useAuth } from './security/authContext'
//import { useContext } from 'react'
export default function FooterComponent() {
	const authenticate = useAuth()
	//console.log(authenticate)
	return (
		<footer className="footerComponent">
			<div className="container">

				Footer
			</div>
		</footer>
	);
}