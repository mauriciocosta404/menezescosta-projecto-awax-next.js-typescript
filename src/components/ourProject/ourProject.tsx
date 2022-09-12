import * as C from './style';
import Image from 'next/image';
import { FotoMock } from '../mock/fotoMock';
import Button from '../button/button';

const OurProject=()=>{
    return(
        <C.Container>
            <div className='title'>
                <h2>OUR PROJECTS</h2>
                <span>WHAT WE CREATE</span>
            </div>
            <div className="slide-controler">
                <ul>
                    <li>ALL</li>
                    <li>PHOTOS</li>
                    <li>BRANDING</li>
                    <li>ADVERTS</li>
                    <li>DEVELOPMENT</li>
                    <li>MISC</li>
                </ul>
            </div>
            <div className='images'>
                {
                   FotoMock.map((item,id)=>(
                        <Image key={id} src={item.photo} width={250} height={150} alt='' />
                   ))
                }
            </div>
            <div className='btnContainer'>
                <Button name='MORE PROJECTS'></Button>
            </div>
        </C.Container>
    )
}
export default OurProject;