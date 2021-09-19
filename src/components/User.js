import React, { useState } from "react";

export function User(props) {
    const [isHidden, setIsHidden] = useState(true)
   

    
    
 
    const handleClick = () => {
        setIsHidden(!isHidden)
        console.log(isHidden)
    

    }
        return (
            <li key={props.person.email}>
                <p>{props.person.name.first} {props.person.name.last}</p>
                <img src={props.person.picture.thumbnail}></img>
                <br />
                <button onClick={ () => handleClick() }>{isHidden ? "Show Details" : "Hide Details"}</button>
                <br />
                {!isHidden && 
                    <p>{props.person.phone}</p>
                }
            </li>

        )
}