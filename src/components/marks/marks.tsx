import * as C from './style';
import { marksMock } from '../mock/marksMock';
import Image from 'next/image';

const Mark=()=>{
    return(
        <C.Container>
                {
                    marksMock.map((item,key)=>(
                        <div key={key}>
                            <Image src={item.url} alt='mark'></Image>
                        </div>

                        ))
                }
        </C.Container>
    )
}
export default Mark;