import React, {useState} from 'react'
import './navbar.css'

import Home from './../Home/home';
import { MdTravelExplore } from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";

 const Navbar = () => {
    const[active, setActive] = useState('navBar')
    //function to toggle navBar
    const showNav = () =>{
        setActive('navBar activeNavbar')
    }

    //function to remove navBar
    const removeNavbar = () =>{
        setActive('navBar ')
    }

  return (
    <section className='navBarSection'>
        <header className='header flex'>
            <div className='logoDiv'>
                <a href="#" className='logo flex'>
                <MdTravelExplore className='icon'/><h1><span>air</span>bnb</h1>
                </a>
            </div>
            <div className={active}>
                <ul className='navLists flex'>
                    <li className='navItem'>
                        <a href="#" className='navLink'>Home</a>
                    </li>
                    <li className='navItem'>
                        <a href="#" className='navLink'>Packqge</a>
                    </li>
                    <li className='navItem'>
                        <a href="#" className='navLink'>shop</a>
                    </li>
                    <li className='navItem'>
                        <a href="#" className='navLink'>About</a>
                    </li>
                    <li className='navItem'>
                        <a href="#" className='navLink'>Pages</a>
                    </li>
                    <li className='navItem'>
                        <a href="#" className='navLink'>New</a>
                    </li>
                    <li className='navItem'>
                        <a href="#" className='navLink'>Contact</a>
                    </li>

                    <button className='btn'>
                    <a href="#">subcribe</a>
                    </button>
                </ul>

                <div onClick={removeNavbar} className='closeNavbar'>
                   <IoCloseCircle className='icon'/>
                </div>
            </div>
            <div onClick={showNav} className='toggleNavbar'>
            <TbGridDots className='icon'/>
            </div>
        </header>
    </section>
  )
}


export default Navbar
