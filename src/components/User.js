import React from "react";

export function User(props) {
    console.log(props)
        return (
            <li key={props.person.email}>{props.person.name.first}</li>
        )
}