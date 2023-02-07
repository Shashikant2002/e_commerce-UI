import React from 'react';
import '../../Style/header.css';
import { ImSearch } from 'react-icons/im';
import { RiShoppingBag3Fill } from 'react-icons/ri';
import { MdPermContactCalendar } from 'react-icons/md';
import { FaWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const mainMenu = () => {
    document.getElementById('mainMenu').classList.toggle('mainMenuActive');
}

const searchShow = () => {
    document.getElementById('searchBox').classList.toggle('searchShow');
}

const initialPog = () => {
    document.getElementById('searchBox').classList.remove('searchShow');
    document.getElementById('mainMenu').classList.remove('mainMenuActive');

}

window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").classList.add('onscrollHeader');
    } else {
        document.getElementById("header").classList.remove('onscrollHeader');
    }
}

const Header = () => {
    return (
        <>
            <header id='header' className="header commonSec">
                <div className="container flex justifySpaceBetween alignCenter">
                    <div className="logo">
                        <Link to="/">
                            <img src={process.env.PUBLIC_URL + "Assets/Logo/gr-logo.png"} alt="" />
                        </Link>
                    </div>

                    <div className="menu" onClick={() => mainMenu()}>
                        <div className="hambar">
                            <span className='block'></span>
                            <span className='block'></span>
                            <span className='block'></span>
                        </div>
                    </div>

                    <div className="mainMenu" id='mainMenu'>
                        <div className="container flexWrap flex justifySpaceBetween alignCenter">
                            <span onClick={() => mainMenu()} className='close'><FaWindowClose /></span>
                            <div className="part_1 part flex justifySpaceBetween alignCenter">
                                <img src={process.env.PUBLIC_URL + "Assets/Logo/gr-logo.png"} alt="Logo Here" />
                                <ul className='flex'>
                                    <li onClick={() => initialPog()}><Link to="/"><h6>Home</h6></Link></li>
                                    <li onClick={() => initialPog()}><Link to="/products"><h6>Products</h6></Link></li>
                                </ul>
                            </div>
                            <div className="part_1 part flex justifySpaceBetween alignCenter">
                                <ul className='flex'>
                                    <li onClick={() => initialPog()}><Link to="/"><h6>Contact US</h6></Link></li>
                                    <li onClick={() => initialPog()}><Link to="/"><h6>About Us</h6></Link></li>
                                </ul>
                                <div className="icons flex">
                                    <h4 onClick={() => searchShow()}><ImSearch /></h4>
                                    
                                    <Link to="/cart"><h4 onClick={() => initialPog()}><RiShoppingBag3Fill /></h4></Link>
                                    <h4 onClick={() => initialPog()}><MdPermContactCalendar /></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="search" id='searchBox'>
                <div className="bg">
                    <div className="container flex justifyCenter alignCenter">
                        <span onClick={() => searchShow()} className='close'><FaWindowClose /></span>
                        <div className="card">
                            <form action="#">
                                <input type="text" placeholder='Search Here' />
                                <button onClick={() => initialPog()} className='globalBtnFillBtn' type='submit'>Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header