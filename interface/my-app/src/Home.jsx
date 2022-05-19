import {withRouter} from "react-router-dom";
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
		<form>
			<label>
				Username:	
				<input type="text" name="username"/>
			</label>
		</form>
	</div>

    
  );
}

export default withRouter(Home);
