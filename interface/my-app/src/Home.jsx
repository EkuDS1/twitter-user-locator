// import {withRouter} from "react-router-dom";
import axios from 'axios'
import React,{ useEffect,useState } from 'react';

const Home = () => {
  
	const [getMessage,setMessage] = useState({})

	useEffect(()=>{
		axios.get('http://localhost:5000/Lord_Arse').then(response=>{
			console.log("Success",response)
			setMessage(response)
		}).catch(error =>{console.log(error)})
	})

  return (
    <div>
      
      <h1>🔴 Home Page</h1>
      <p>{JSON.stringify(getMessage.data)}</p>
    </div>
  );
}

export default Home;
