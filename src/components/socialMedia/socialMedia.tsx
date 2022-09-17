import * as C from './style';
import Image from 'next/image';
import share from '../../../images/share.png';
import { SocialMediaMock } from '../mock/socialMediaMock';

const SocialMedia=()=>{
    return(
        <C.Container>
            <div className='share'>
                <Image src={share} alt='share'></Image>
                <span>TELL ABOUT US:</span>
            </div>
            <div className="medias">
                {
                    SocialMediaMock.map(({url,color},key)=>(
                        <C.Icons key={key} color={color}>
                            <div>
                                <Image src={url} alt='socialMedia'></Image>
                            </div>
                        </C.Icons>
                    ))
                }
            </div>
        </C.Container>
    )
}
export default SocialMedia;