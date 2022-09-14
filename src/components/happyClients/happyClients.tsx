import * as C from './style';
import Image from 'next/image';
import Homem2 from '../../../images/homem2.png';
import quote from '../../../images/quote.png';

const HappyClients=()=>{
    return(
        <C.Container>
            <div className="title">
                <h2>HAPPY CLIENTS</h2>
                <span>CLIENT REVIEWS</span>
            </div>
            <div className='client-description'>
                <Image src={Homem2} alt=''></Image>
                <h2>John Doe</h2>
                <h3>Head of PR Departament</h3>
                <Image src={quote} alt='' className='quote'></Image>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ab tempora <br /> consectetur. Cum natus consequuntur ducimus odio hic, qui  ipsam provident, nihil velit consectetur <br /> distinctio minima harum modi fugiat fuga?</p>
            </div>
        </C.Container>
    )
}
export default HappyClients;