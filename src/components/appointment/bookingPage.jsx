import { useParams, Link } from 'react-router-dom'
import { useAuth } from './security/authContext'
export default function BookingPage() {
	//const { username } = useParams()   // useParams is desconstructed to map any objects that matches the username
	const auth = useAuth()
	//console.log(username)
	return (
		<div className="BookingPage">
			<h4> Welcome {auth.username}</h4>
			<div>
				Manage your appointments
				< Link to="/clientBookings"> view your bookings</Link>
			</div>

		</div>

	);
}