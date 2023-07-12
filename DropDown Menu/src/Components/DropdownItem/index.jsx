import React from "react";

export default function DropdownItem({img, text}){
    return(
        <li className="dropdownItem">
            <img src={img} />
            <a> {text} </a>
        </li>
    )
}