import { useAuth } from './security/authContext'
export default function LogOutComponent() {
	return (
		<div className="LogOutComponent">
			You have succesfully logged out
		</div>

	);
}
export function HandleLogoutComponent() {
	const auth = useAuth()
	auth.Logout()
	return < LogOutComponent />
}

		















