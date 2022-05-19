import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home'
import Service from './Service'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar';
import {BrowserRouter as Router,Redirect, Switch, Route} from  'react-router-dom';

const App = () => {
	
	return (
		<>
		
		<Router>
		<Navbar/>
			<Switch>	
				<Route exact path='/' component = {Home}></Route>
				<Route exact path='/about' component = {About}></Route>
				<Route exact path='/service' component = {Service}></Route>
				<Route exact path='/contact' component = {Contact}></Route>
				<Redirect to = "/" /> 
			</Switch>
		</Router>
		
		</>
	);
}

export default App;
