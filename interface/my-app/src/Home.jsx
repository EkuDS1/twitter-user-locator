// import {withRouter} from "react-router-dom";
import axios from 'axios'
import React,{ useEffect,useState,useRef } from 'react';
import MapView from './Map.jsx'
const Home = () => {
	const mapref=useRef()
	const [getMessage,setMessage] = useState({})
	const [username,setUsername] = useState('')
	const [getCoordinates,setCoordinates] = useState({})
	let flag=false
	// const [getJSON, setJSON] = useState({})

	useEffect(()=>{
		console.log(getMessage.location)
		console.log(getCoordinates.lat)
		console.log(getCoordinates.long)	
		console.log(`Form Submitted,${username}`)
		if (getCoordinates.lat!=undefined && getCoordinates.long!=undefined){
			mapref.current.flyMap()
			flag=!flag
		}
	},[getMessage]);
	
	const handleSubmit = (e) =>{
		axios.get(`http://localhost:5000/${username}`).then(response=>{
			console.log("Success",response.data)
			setMessage(response.data)
			setCoordinates({"lat":response.data.lat,"long":response.data.long})
			if(flag==false){
				flag=true
			}
		}).catch(error =>{console.log(error)})
		
		e.preventDefault();
		
	}

const style = {
	backgroundColor: "white"
}
  return (
    <div >
		<form  onSubmit = {handleSubmit}>

			<div className="example">
				<input name="search" style = {style} placeholder="Search" className="searchBox" type="text" onChange={(e)=>setUsername(e.target.value)}/>			
  				<button type="submit"><i class="fa fa-search"></i></button>
			</div>
			<MapView ref={mapref} lat={getCoordinates.lat} long={getCoordinates.long}></MapView>
		
		</form>
	</div>
	
    
  );
}

export default Home;
