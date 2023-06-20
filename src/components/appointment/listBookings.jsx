
export default function Bookings() {

	


    
	const today = new Date();
	const appointmentDate = new Date(today.getFullYear() + 1, today.getMonth(), today.getDay())
	const appointments = [
		{ id: 1, name: "Mark Pope", discription: "develop a web project", date: appointmentDate },
		{ id: 2, name: "John Smith", discription: "Host in the web", date: appointmentDate },
		{ id: 3, name: "Bryan Jake", discription: "Fix site bug", date: appointmentDate },
		{ id: 4, name: "Luke Fack", discription: "Host in the web", date: appointmentDate }

	]
	return (
		<div className="Bookings">
			<h5>Booking Appointment Application</h5>
			<table className="table">
				<thead>
					<tr>
						<td>id</td>
						<td>name</td>
						<td>Discription</td>
						<td>Date</td>

					</tr>
				</thead>
				<tbody>
					{
						appointments.map(
							appointment => (
								<tr key={appointment.id} >
									<td>{appointment.id}</td>
									<td>{appointment.name}</td>
									<td>{appointment.discription}</td>
									<td>{appointment.date.toDateString()}</td>
								</tr>

							)
						)
					}

				</tbody>

			</table>

		</ div>
	);
}
