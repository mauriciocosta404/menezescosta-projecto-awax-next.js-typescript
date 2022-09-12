import * as C from './style';
import backGround from '../../../images/foto5.jpg';
import Image from 'next/image';
import OurTeamCards from '../ourTeamCards/ourTeamCards';
import { OurTeamMock } from '../mock/cardsMock';

const OurTeam=()=>{
    return(
        <C.Container>
                <C.OurTeamContent>
                    <div className='title'>
                        <h2>OUR TEAM</h2>
                        <span>OUR CO-WORKERS</span>
                    
                        <C.CardsContainer>
                            {
                                OurTeamMock.map((item,id)=>(
                                    <OurTeamCards key={id} url={item.url} name={item.name} profetion={item.profetion}/>
                                ))
                            }
                        </C.CardsContainer>
                    </div>
                </C.OurTeamContent>
        </C.Container>
    )
}
export default OurTeam;