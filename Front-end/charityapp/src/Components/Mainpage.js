import React from "react";
import './Mainpage.css';
import pic2 from '../Image/pic2.png';
import pic from '../Image/pic1.jpg';
import Slideshow from "../Slider/Slideshow";
import pic3 from '../Image/pic3.jpg';
import pic4 from '../Image/pic4.jpg';
import pic5 from '../Image/pic5.jpg';
import wedding from '../Image/wedding.png';
import health from '../Image/healthcare.png';
import poor from '../Image/homeless.png';
import education from '../Image/education.png';
import farmer from '../Image/farmer.png';
import env from '../Image/env.png';
import Navbar from './Navbar';
import Priority from "./Priority";
import Contact from "./Contact";

function Mainpage(){
    const images=[pic,pic3,pic4,pic2,pic5];
    return(
        <>
            <nav>
                <Navbar/>
            </nav>
            <main>
               <div className="m1">
                    <div className="slider">
                        <Slideshow images={images} />
                    </div>
               </div>
               <div className="main2" id="about">
                    <div className="m2"></div>
                    <h1 ><u>About Us</u></h1>
                    <div className="about">
                        <h3>
                            Abul Qasim Charitable Trust is a non-profit organization based in Pipili, Odisha, India, was founded in 2022 with a profound mission - to extend a compassionate hand to those in need.
                            At the heart of our organization lies a dedication to serving and supporting individuals who are facing various challenges in life. Our unwavering commitment is rooted in the fundamental 
                            principle of providing help where it's needed most.<br/><br/>
                            We focus our efforts on several key areas of assistance, ranging from supporting marriage ceremonies for those who might otherwise struggle
                            to afford them, to alleviating the financial burdens associated with medical expenses. We stand with those who have lost their parents, offering a caring and nurturing environment. Additionally, 
                            we champion the cause of education, ensuring that every individual has access to learning and personal growth opportunities. We also assist people in building their homes and provide support in 
                            various other areas.<br/><br/>
                            Abul Qasim Charity's primary aim is to ensure that nobody's life is lost due to financial difficulties. We envision a world where compassion has no limits. To turn this vision into reality, we've 
                            established the Abul Qasim Charitable Trust. Our goal is to have a positive and enduring impact on the lives of the people we assist, providing hope and making positive changes in the lives of individuals 
                            and communities in need. With each act of kindness, we move closer to creating a more caring and fair society. 
                        </h3>
                    </div>
               </div>
               <div class="main3">
                    <div className="text">
                            <h4>We are helping all people who need our help,<br/>but </h4>
                            <h1>Our Main Priority Areas</h1>
                            <h4>are...</h4>
                    </div>
                    <div class="card-store">
                        <div class="card">
                            <Priority
                                imgSrc={wedding}
                                msg="Helping For Marriege"
                            />
                        </div>
                        <div class="card">
                            <Priority
                                imgSrc={health}
                                msg="Health Care"
                            />
                        </div>
                        <div class="card">
                            <Priority
                                imgSrc={poor}
                                msg="Helping for food"
                            />
                        </div>
                        <div class="card">
                            <Priority
                                imgSrc={education}
                                msg="Education"
                            />
                        </div>
                        <div class="card">
                            <Priority
                                imgSrc={env}
                                msg="Environment"
                            />
                        </div>
                        <div class="card">
                            <Priority
                                imgSrc={farmer}
                                msg="Helping Farmer"
                            />
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <Contact/>
            </footer>
        </>
    )
}
export default Mainpage;