import React from "react";
import { User } from "./User";

export function Users(props) {
    return (
        <ul> 
            {props.people.map((person) => (
            <User person={person} />
            ))}
        </ul>
    );
}