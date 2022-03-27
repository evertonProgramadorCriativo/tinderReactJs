import React from 'react';
import "./Header.css"
import PersonIcon from '@material-ui/icons/Person';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';

function Header() {
  return (
    <div className="header">
        <PersonIcon />
         <img className='header__logo'
          src='https://cdn-icons-png.flaticon.com/512/408/408790.png' alt='logo tinder' />
         <ChatBubbleIcon />
    </div>
  );
}

export default Header;
