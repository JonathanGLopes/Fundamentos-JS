import DropdownItem from './Components/DropdownItem';
import React, {useState} from 'react';

import perfil from './assets/perfil.jpg';
import user from './assets/user.png';
import edit from './assets/edit.png';
import inbox from './assets/envelope.png';
import settings from './assets/settings.png';
import help from './assets/question.png';
import logout from './assets/log-out.png';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="menu-container">
        <div className="menu-trigger" onClick={() => {setOpen(!open)}}>
          <img src={perfil} alt="" />
        </div>

        <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
          <h3>Jonathan Lopes <br/> <span>Web Developer</span></h3>
          <ul>
            <DropdownItem img={user} text={"My Profile"} />
            <DropdownItem img={edit} text={"Edit Profile"} />
            <DropdownItem img={inbox} text={"Inbox"} />
            <DropdownItem img={settings} text={"Settings"} />
            <DropdownItem img={help} text={"Help"} />
            <DropdownItem img={logout} text={"Logout"} />
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
