import React from 'react'
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import Whatshot from '@mui/icons-material/Whatshot';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';


function Header() {
  return (
    // BEM
    <div className='header'>
      <IconButton>
      <PersonIcon className='header__icon' fontSize='larger' />
      </IconButton>
      
      <IconButton>
      <Whatshot className='header__icon' fontSize='larger' />
      </IconButton>

      <IconButton>
      <ForumIcon className='header__icon' fontSize='larger' />
      </IconButton>
    </div>
  )
}

export default Header;
