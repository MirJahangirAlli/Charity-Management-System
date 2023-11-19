import React from "react";


function Priority(props){
    return(
        <>
            <div className="card-img"><img src={props.imgSrc} alt="logo"></img></div>
            <h3>{props.msg}</h3>
        </>
    )
}
export default Priority;