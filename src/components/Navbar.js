import React, { useState } from 'react';
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css"

const Navbar = ({ navbarLinks }) => {
    const [menuClicked, setMenuClicked] = useState(false);

    const toggleMenuClick = () => {
        setMenuClicked(!menuClicked);
      };

    return <nav className='navbar'>
        <span className='navbar_logo'>Alerces</span>
        <ul className='navbar_list'>
            {navbarLinks.map((item, index) => {
                return (
                    <li className='navbar_item' key={index}>
                        <a className='navbar_link' href={item.url}>
                            {item.title}
                        </a>
                    </li>
                )
            })}
        </ul>
    </nav>
}

export default Navbar;