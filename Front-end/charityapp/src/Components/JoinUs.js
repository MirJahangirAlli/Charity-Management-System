import React from "react";
import './JoinUs.css';

const JoinUs = () => {
    return (
        <>
            <div className="contain">
                <div className="tagline">
                    <h1>Let's Build a Better World Together</h1>
                </div>
                <div className="joinRegis">
                    <h2>Register</h2>
                    <hr></hr>
                    <form>
                        <div className="form">
                            <div className="form1">
                                <label for="t1">First Name :</label>
                                <input type="text" id="t1" name="fname" placeholder="Enter First Name"></input>
                                <label for="t2">Email :</label>
                                <input type="email" id="t2" name="email" placeholder="Enter Your Email"></input>
                                <label for="t3">DOB :</label>
                                <input type="date" id="t3" name="dob" ></input>
                                <label for="t4">Address :</label>
                                <input type="text" id="t4" name="add" placeholder="Enter Your Full Address"></input>
                                
                            </div>
                            <div className="form2">
                                <div className="box">
                                    <label for="t6">Last Name :</label>
                                    <input type="text" id="t6" name="lname" placeholder="Enter Last Name"></input>
                                </div>
                                <div className="box">
                                    <label for="t7">Aadhar No. :</label>
                                    <input type="tel" id="t7" name="aadhar" placeholder="Enter Your Aadhar Number" maxLength={16}></input>
                                </div>
                                <div className="box">
                                    <label for="t5">Phone No. :</label>
                                    <input type="tel" id="t5" name="name" placeholder="Enter Phone Number"></input>
                                </div>
                                <div className="box">
                                    <label>Gender :</label>
                                </div>       
                            </div>
                        </div>
                        
                        <input type="submit" name="register" value="Register"/>
                    </form>
                </div>
            </div>
        </>
    )
}
export default JoinUs;