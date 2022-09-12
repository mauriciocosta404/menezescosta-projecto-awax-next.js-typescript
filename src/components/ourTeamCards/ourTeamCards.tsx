import * as C from './style';
import Image from 'next/image';
import { IconsCards } from '../mock/cardsMock';

interface CardProps{
    url:string | any;
    name:string;
    profetion:string;
}

const OurTeamCards=({url,name,profetion}:CardProps)=>{
    return(
        <C.Container>
            <Image src={url} alt='image'></Image>

            <div className="title">
                <h2>{name}</h2>
                <span>{profetion}</span>
            </div>

            <div className='icons'>
                {
                    IconsCards.map((item,key)=>(
                        <div key={key} className='icon'>
                            <Image src={item.url}></Image>
                        </div>
                    ))
                }
                
            </div>
        </C.Container>
    );
}
export default OurTeamCards;