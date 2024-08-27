
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const [isOpen,setOpen]=useState(false);

    const toogleMenu = ()=>{
        setOpen(!isOpen)
    }
  return (
    <div>
        <header>
            <div className="container">
      <nav>
        <div className="logo">
        <Link to='/'>Well Come User !!!</Link>
        </div>
        <ul  className={ isOpen ? 'nav-link active':'nav-link'}>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/register'>Register</Link></li>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
        <div className="icon" onClick={toogleMenu}>
        <FaBars />
        </div>
      </nav>
      </div>
      
      </header>
     
    </div>
  );
}

export default Navbar;
