import React from "react";
import what from '../Image/whatsapp.png';
import face from '../Image/facebook.png';
import twit from '../Image/twitter.png';
import './Contact.css';
const Contact=()=>{
    return(
        <>
            <div className="contact" id="contact">
                <div className="cont one">
                    <h2>Contact Details</h2><hr/><br/>
                    <p><i className="fas fa-location-dot"></i> Abul Qasim Charitable Trust<br/>AT- Bhabanipur, PO- Pilili, PS- Pipili, Dist- Puri, Pin- 752104</p>
                    <br/>
                    <p><i className="fas fa-phone"></i> 7504636366, 8480726175</p>
                    <p><i className="fas fa-envelope"></i> abulqasim@charity.com</p>
                    <br/>
                    <div className="social">
                        <a href="https://www.facebook.com/jakiralli.alli"><img src={face} alt="facebook"></img></a>
                        <a href="https://twitter.com/Mj_alli7"><img src={twit} alt="twitter"></img></a>
                        <a href="https://web.whatsapp.com/"><img src={what} alt="whatsapp"></img></a>
                    </div>
                </div>
                <div className="cont two">
                    <h2>Need Any Help</h2><hr/><br/>
                    <form>
                        <input type="textbox" name="name" placeholder="Enter your name"></input>
                        <input type="tel" name="number" placeholder="Enter your phone no. "></input>
                        <input type="text" name="querry" placeholder="Write your problem here" id="querry"></input>
                        <button type="Submit" name="send">Send</button>

                    </form>
                </div>
            </div>
            <div className="foot">
                <p>Copyright &copy; Abul Qasim Charitable Trust 2023 All Rights Reserved</p>
            </div>
        </>
    )
}
export default Contact;