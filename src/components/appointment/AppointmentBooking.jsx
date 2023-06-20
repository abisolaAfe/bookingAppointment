
import './Appointment.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AddAppointment, { ListBookedAppointment, CreatedMessages } from './booking'
import HeaderComponent from './header'
import BookingPage from './bookingPage'
import Bookings from './listBookings'
import LoginComponent from './loginComponent'
import { ErrPage } from './loginComponent'
import AuthProvider, { useAuth } from './security/authContext'
import { HandleLogoutComponent } from './logout'
import CreateProfile, { SuccessMessages } from './profilePage'





function AunthenticatedRoute({children}) {
	const auth = useAuth()

	if (auth.authentication) 
		return children
	 return < Navigate to= "/" /> 

}

export default function Appointment() {
	

	return (
	  <div className="container">
		<AuthProvider>
			<BrowserRouter>
				<HeaderComponent />
				<Routes>
						<Route path='/' element={<AddAppointment />} />

				    <Route path='/login' element={<LoginComponent />} />

					<Route path='/welcome/:username' element={
							<AunthenticatedRoute>	<BookingPage /> </AunthenticatedRoute>
							} />
					<Route path='/clientBookings' element={
							<AunthenticatedRoute>	<ListBookedAppointment /> </AunthenticatedRoute>
						} />

					<Route path='*' element={<ErrPage />} />
						<Route path='/booking' element={
							<AunthenticatedRoute>	<Bookings /> </AunthenticatedRoute>
						} />
						<Route path='/success' element={<SuccessMessages />} />
						<Route path='/logout' element={<HandleLogoutComponent />} />
						<Route path='/appointment' element={<AddAppointment />} />
						<Route path='/createProfile' element={<CreateProfile />} />
						<Route path='/created' element={<CreatedMessages />} />	
				</Routes>
				</BrowserRouter>
		</AuthProvider>

	   </div>
	);
}
	 
	 

	





	 