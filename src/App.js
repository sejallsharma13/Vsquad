import React from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home';
import Blog from './components/Pages/Blog';
import Campus from './components/Pages/Campus';
import ContactUs from './components/Pages/ContactUs';
import  Video from './components/Pages/Video';
import  AboutUs from './components/Pages/AboutUs';
import  SignUp from './components/Pages/SignUp';
import  Calendar from './components/Pages/Calendar';

//import   from './components/Pages/ContactUs';
function App() {
  return(
    <>
    
      <Router>
      <Navbar />
      
        <Switch>
          <Route path='/' exact component = {Home} />
          <Route path='/blog' component={Blog} />
          <Route path='/campus' component={Campus} />
          <Route path='/contact-us' component={ContactUs} />
          <Route path='/video' component={Video} />
          <Route path='/about-us' component={AboutUs} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/calendar' component={Calendar} />
         
        
        </Switch>
        
        </Router>
       
        
  
    </>
  );
  }
export default App;
