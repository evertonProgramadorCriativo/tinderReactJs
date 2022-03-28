import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ChatIcon from '@material-ui/icons/Chat';
import IconButton from '@material-ui/core/IconButton';


function Header() {
  return (
    <div className="header">
      <IconButton>
           <PersonIcon fontSize='large' className='header__icon'/>
      </IconButton>
     
         <img className='header__logo'
          src='https://cdn-icons-png.flaticon.com/512/408/408790.png' alt='logo tinder' />

          <IconButton>
            <ChatIcon fontSize='large' className='header__icon'/>
          </IconButton>
         
    </div>
  );
}

export default Header;
