import React, {useState} from "react";
import './menu.css';
import menu from '../../assets/menu.png';
import DropdownMenu from "../DropdownMenu";

export default function MenuHamburguer(){
    const [open, setOpen] = useState(false);

    return(
       <>
            <div className="menu" onClick={() => {setOpen(!open)}}>
                <img src={menu} alt="" />
            </div>
            <div className={`menu-hamburguer ${open ? 'active' : 'inactive'} `}>
                <ul>
                    <DropdownMenu text={"Início"}/>
                    <DropdownMenu text={"Perfil"}/>
                    <DropdownMenu text={"Amigos"}/>
                    <DropdownMenu text={"Mensagens"}/>
                    <DropdownMenu text={"Sair"}/>
                </ul>
            </div>
       </>
    )
}