import * as C from './style';
import Image from 'next/image';
import livro from '../../../images/livros.png';
import Button from '../button/button';
import check from '../../../images/check.png';

const Premium=()=>{
    return(
         <C.Container>
            <div className="title">
                <h2>PREMIUM</h2>
                <span>EVEN MORE FEACTURES AVAILABLE</span>
            </div>
            <div className='bookContainer'>
                <div className='book'>
                    <Image src={livro} alt='livro'></Image>
                </div>
                <div className='content'>
                    <div>
                        <div className='sub-title'>
                            <Image src={check} alt='check'></Image>
                            <h2>FIRST FEATURE</h2>
                        </div>
                        <p>Praesent metus urna, feugiat a placerat vel elementum at leo</p>
                        <p>Quisque vel fermentum ipsum. Nula at facilisis est</p>
                        <ul>
                            <li>-- FEATURE ONE</li>
                            <li>-- FEATURE TWO</li>
                            <li>-- FEATURE THREE</li>
                        </ul>
                    </div>

                    <div>
                        <div className='sub-title'>
                            <Image src={check} alt='check'></Image>
                            <h2>SECOND FEATURE</h2>
                        </div>
                        <p>Praesent metus urna, feugiat a placerat vel elementum at leo</p>
                    </div>

                    <div>
                        <div className='sub-title'>
                            <Image src={check} alt='check'></Image>
                            <h2>THIRD FEATURE</h2>
                        </div>
                        <p>Praesent metus urna, feugiat a placerat vel elementum at leo</p>
                    </div>
                </div>
            </div>
            <Button name='GET IN TOUCH'></Button>
         </C.Container>
    )
}
export default Premium;