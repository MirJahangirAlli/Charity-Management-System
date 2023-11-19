import React, { Component } from 'react';
import logo from '../Image/Logo.png';
import tagline from '../Image/tagline.png';
import './Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component{
    state={clicked:false};
    handleClick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
    
    render(){
    return(
        <>
            <nav>
                <div className='logo'>
                    <img src={logo} alt='logo' className='log'></img>
                    <img src={tagline} alt='logo' className='tag'></img>
                </div>
                
                <div className='menubar'>
                    <ul className={this.state.clicked?"ul active":"ul"}>
                        <li><a href='/' className='active'>Home</a></li>
                        <li><a href='/'>Events & Album</a></li>
                        <li><a href='#about'>About</a></li>
                        <li><a href='#contact'>Contact us</a></li>
                        <li><Link to="/signin">Sign In</Link></li>
                    </ul>
                    <div className='button'>
                        <button className='btn2'><i className='fa fa-heart'></i>Donate</button>
                        <button className='btn1'>Join us</button>
                    </div>
                    
                </div>
                <div className='menuline' onClick={this.handleClick}>
                    <i id="bar" className={this.state.clicked? "fa fa-xmark fa-xl":"fas fa-bars fa-xl"}></i>
                </div>
                
            </nav>
        </>
    )
}
}
export default Navbar;