import { createContext, useContext, useState } from "react";




export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({ children }) {
  
	
	const [authentication, setAuthentication] = useState(false)
	const [LoginTab, setLoginTab] = useState(true)
	const [tUser, setTUser] = useState(null)
	const [profiles, setProfiles] = useState([])
	const [username, setUsername]=useState(null)

	function userProfile(fullname, username, password) {
		this.fullname = fullname
		this.username = username
		this.password = password
	}
	//find out why this logic is not working
	/*function findUser(username) {
		profiles.forEach(foundUser => {
			if (foundUser.username === username) {
				setTUser(foundUser.password)
				console.log(foundUser.password)
				return (foundUser.username)
					
			} else setTUser(null)
		})

	}	*/
	

	
	function Login(username, password) {
		let check='';
		let pass='';
		profiles.forEach(foundUser => {
			if (foundUser.username === username) {
				setTUser(foundUser.password)
				 pass = (foundUser.password)
				check = (foundUser.username)
				
			}
		}) 
		
		if (username === check  && password === pass) {
			setAuthentication(true)
			setLoginTab(false)
			setUsername(check)
			return true
		} else
			setAuthentication(false)
			return false;
	}
	function Logout() {
		setAuthentication(false)
		setLoginTab(true)
	}
	function createProfile(fullname,username,password) {
		const user = new userProfile(fullname, username, password)
		profiles.push(user)
	
		
	}

    return (
		<AuthContext.Provider value={{ Login,createProfile, authentication, setAuthentication,Logout,LoginTab,username } }>
            {children }
        </AuthContext.Provider>
        )
}



