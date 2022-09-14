import * as C from './style';
import Image from 'next/image';
import banner from '../../../images/bg.jpg';
import Logo from '../../../images/medalha.png';
import Button from '../button/button';
import menuBar from '../../../images/menu.png';
import { useState } from 'react';

const Header=()=>{

    const [showMenu,setShowMenu]=useState(false);
    //const [screen,setScreen]=useState<any>();
    //const scr=()=>{
      //  setScreen(window.screen);
      //  console.log(screen);
    //}

    return(
        <C.MainContainer showMenu={showMenu}>
            <C.Container className='header'>
                <div>
                    <Image width={35} height={35} src={Logo} alt='logo'></Image>
                    Awax
                </div>
                <C.NavContainer>
                    <div className='bar' onClick={()=>setShowMenu(showMenu?false:true)}>
                        <Image src={menuBar} alt=''></Image>
                    </div>
                    <ul className='menu'>
                        <li><a href="">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#ourProjects">Our projects</a></li>
                        <li><a href="#ourTeam">Our team</a></li>
                        <li><a href="happyClients">Happy clients</a></li>
                        <li><a href="price">Price</a></li>
                        <li><a href="someFacts">Some facts</a></li>
                        <li><a href="contactUs">Contacts us</a></li>
                    </ul>
                </C.NavContainer>
            </C.Container>
                <ul className='menu-mobile'>
                    <li><a href="">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#ourProjects">Our projects</a></li>
                    <li><a href="#ourTeam">Our team</a></li>
                    <li><a href="happyClients">Happy clients</a></li>
                    <li><a href="price">Price</a></li>
                    <li><a href="someFacts">Some facts</a></li>
                    <li><a href="contactUs">Contacts us</a></li>
                </ul>
            <C.Banner>
                <div>
                    <div className='description'>
                        <h2>DESIGN IS ABOUT</h2>
                        <h2 className='second'>COMUNICATION</h2>
                        <p>CALL ME:+244 941692901</p>
                        <Button name='GET IN TOUCH!'/>
                    </div>
                </div>
                <Image src={banner} height={840} alt=''></Image>
            </C.Banner>
        </C.MainContainer>
    )
}
export default Header;