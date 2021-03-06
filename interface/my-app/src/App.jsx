import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home.jsx'
import Map from './Map.jsx'
import Service from './Services_Page/Service.jsx'
import About from './About_Page/About.jsx'
import Contact from './Contact_Page/Contact.jsx'
import Navbar from './Common/Navbar.jsx';
import Footer from './Common/Footer.jsx';
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
				<Route exact path='/map' component = {Map}></Route>
				<Redirect to = "/" /> 
			</Switch>
			<Footer />
		</Router>
		
		</>
	);
}

export default App;
