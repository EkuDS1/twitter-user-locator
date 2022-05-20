// import {withRouter} from "react-router-dom";
import axios from 'axios'
import React,{ useEffect,useState } from 'react';

const Home = () => {
  
	const [getMessage,setMessage] = useState({})
	const [username,setUsername] = useState('')
	const [getCoordinates,setCoordinates] = useState({})
	// const [getJSON, setJSON] = useState({})
	useEffect(()=>{
		console.log(getMessage.location)
		console.log(getCoordinates.lat)
		console.log(getCoordinates.long)	
		console.log(`Form Submitted,${username}`)
	},[getMessage]);
	
	const handleSubmit = (e) =>{
		axios.get(`http://localhost:5000/${username}`).then(response=>{
			console.log("Success",response.data)
			setMessage(response.data)
			setCoordinates({"lat":response.data.lat[0],"long":response.data.long[0]})
		}).catch(error =>{console.log(error)})
		e.preventDefault();
		
	}

  return (
    <div className="wrapper">
		<form onSubmit = {handleSubmit}>
			<label >
				Username:	
				<input className="searchBox" type="text" onChange={(e)=>setUsername(e.target.value)} name="username"/>			
			</label>
			<button type="submit">Locate!</button>
		</form>
	</div>
	
    
  );
}

export default Home;
