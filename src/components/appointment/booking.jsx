import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"



export const newAppointment = []


export default function AddAppointment() {
	
	const navigate = useNavigate()
	
	
	
	
	const [time, setTime] = useState(null)
	const [date, setDate] = useState(null)
	const [name, inputName] = useState(null)
	const[discription,inputDiscription]= useState(null)
	const [appFeedback, setAppfeedback] = useState(null)
	function HandleNameChange(event) {
		inputName(event.target.value)
		// console.log(event.target.value)
	}
	function HandleDateChange(event) {
		setDate(event.target.value)
		
	
	}
	function HandleDiscriptionChange(event) {
		inputDiscription(event.target.value)
	}

	function HandleTimeChange(event) {
		setTime(event.target.value)
	}
	function addOneApp() {
		const currentDate = new Date()
		const doubleDigit = (currentDate.getMonth() + 1).toString().padStart(2, '0');

		const formattedDate = currentDate.getFullYear() + '-' +  doubleDigit
			+ '-' +currentDate.getDate();
		console.log(formattedDate)
		console.log(date)
		if (time !== null && date !== null & discription !== null&& date>formattedDate)  {
			newAppointment.push({ id: newAppointment.length, name: name, discription: discription, date: date, time: time })
			navigate('/created')
		} else setAppfeedback(<AppointmentFeedback/>)
		
		
		
	}

	function AppointmentFeedback() {
		return (
			<div className ="appointmentFeedback">Please, fill all the fields </div>
			)
	}
	


	return (

		< div className="container col-md-5 col-md-offset-8" >
			<h3>Book Appointment</h3>
			{appFeedback}
			<div className="form form-control ">
				<div>
					<label >Name</label>
					<input className="form-control" type="text" name="name" value={name} onChange={HandleNameChange} />
				</div>
				<div>
					<label>Date</label>
					<input className="form-control" type="date" name="date" value={date} onChange={HandleDateChange} />
			    </div>
			   <div>
				 <label>Discription</label>
				 <input className="form-control discription" type="text" name="discription" value={discription} onChange={HandleDiscriptionChange} />
				</div>
				<div>
					<label>Time</label>
					<input className="form-control" type="time" name="time" value={time} onChange={HandleTimeChange} />
				</div>
			    <div>
					<button className="m-5" onClick={addOneApp}>Create</button>
				</div>
			</div>
		</div >

	);	
}

export function ListBookedAppointment() {
	
	
	return (
		<div className="Bookings">
			<b>Manage Your Appointments </b>
			<hr/>
			<table className="table">
				<thead>
					<tr>
						<td>Id</td>
						<td>Name</td>
						<td>Discription</td>
						<td>Date</td>
						<td>Time</td>
					</tr>
				</thead>
				<tbody>
					{
						newAppointment.map(
							appointment => (
								<tr key={appointment.id} >
									<td>{appointment.id}</td>
									<td>{appointment.name}</td>
									<td>{appointment.discription}</td>
									<td>{appointment.date.toString()}</td>
									<td>{appointment.time.toString()}</td>
								</tr>
							)
						)
					}

				</tbody>

			</table>

		</ div>
	);
	
	
}

export function CreatedMessages() {

	return (
		<div className="createdmessage">Appointment has been created succesfully</div>
	)
}


 