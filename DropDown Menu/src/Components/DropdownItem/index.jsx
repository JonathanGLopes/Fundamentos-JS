import React from "react";

export default function DropdownItem(props){
    return(
        <li className="dropdownItem">
            <img src={props.img} />
            <a> {props.text} </a>
        </li>
    )
}