import * as C from './style';
import Image from 'next/image';
import Homem2 from '../../../images/homem2.png';
import quote from '../../../images/quote.png';

const ContactUs = () => {
    return (
        <C.Container>
            <div className="title">
                <h2>CONTACT US</h2>
                <span>OUR AGENCY LOCATED IN MELBOURNE AUSTRALIA</span>
            </div>
            <div className="input-container">
                <div className='flex'>
                    <div>
                        <input type="text" placeholder='NAME'/>
                    </div>
                    <div>
                        <input type="email" placeholder='EMAIL'/>
                    </div>
                </div>
                <div>
                    <input type="text" placeholder='SUBJECT'/>
                </div>
                <div>
                    <input type="text" placeholder='MESSAGE'/>
                </div>
            </div>
        </C.Container>
    )
}
export default ContactUs;