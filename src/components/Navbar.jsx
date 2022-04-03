import React from 'react'
import { Link } from 'react-scroll'

function Navbar() {

    return (
        <div className='navbar'>
            <ul>
                <li className="link"><a href="#"> 
                <Link 
                    activeClass="active"
                    to="scroll-1"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={0}
                    duration={500}
                > Home </Link>
                </a>
                <span></span>
                <span></span>
                </li>
                <li className="link"><a href="#"> 
                <Link 
                    activeClass="active"
                    to="scroll-2"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={0}
                    duration={500}
                > About </Link> 
                </a>
                <span></span>
                <span></span>
                </li>
                <li className="link"><a href="#"> 
                <Link 
                    activeClass="active"
                    to="scroll-3"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={0}
                    duration={500}
                > Projects </Link>
                </a>
                <span></span>
                <span></span>
                </li>
                <li className="link"><a href="#">
                <Link 
                    activeClass="active"
                    to="scroll-4"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={0}
                    duration={500}
                > Rate </Link>
                </a>
                <span></span>
                <span></span>
                </li>
                <li className="link"><a href="#">
                <Link 
                    activeClass="active"
                    to="scroll-4"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={0}
                    duration={500}
                > Contact </Link>
                </a>
                <span></span>
                <span></span>

                </li>
            </ul>
        </div>
    )
}

export default Navbar