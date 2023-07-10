import React from "react";

export default function DropdownMenu(props){
    return(
        <li className="DropdownMenu">
            <a>{props.text}</a>
        </li>
    )
}