import * as C from './style';
import Image from 'next/image';
import banner from '../../../images/bg.jpg';
import Logo from '../../../images/medalha.png';
import Button from '../button/button';
import menuBar from '../../../images/menu.png';

const Header=()=>{
    return(
        <>
            <C.Container className='header'>
                <div>
                    <Image width={35} height={35} src={Logo} alt='logo'></Image>
                    Awax
                </div>
                <C.NavContainer>
                    <div className='bar'>
                        <Image src={menuBar} alt=''></Image>
                    </div>
                    <ul className='menu'>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Our projects</a></li>
                        <li><a href="">Our team</a></li>
                        <li><a href="">Happy clients</a></li>
                        <li><a href="">Price</a></li>
                        <li><a href="">Some facts</a></li>
                        <li><a href="">Contacts us</a></li>
                    </ul>
                </C.NavContainer>
            </C.Container>
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
        </>
    )
}
export default Header;