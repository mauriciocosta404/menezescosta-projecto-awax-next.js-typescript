import * as C from './style';
import Image from 'next/image';
import aboutImage from '../../../images/foto6.jpg';
import Button from '../button/button';

const About=()=>{
    return(
        <C.SectionContainer>
            <div className='title'>
                <h2>ABOUT US</h2>
                <span>WHO WE ARE?</span>
            </div>
            <C.ContentContainer>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Nulla recusandae quasi ea illum explicabo cumque. Excepturi
                          porro sequi, eum vel soluta nihil repellendus 
                        debitis quam rem reiciendis dolores alias provident?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt necessitatibus nemo adipisci voluptates amet perspiciatis deserunt autem, reiciendis, 
                        esse sunt dolore sint laborum maiores recusandae fuga labore a? A, tenetur?
                    </p>
                    <Button name='LEARN MORE'/>
                </div>
                <div >
                    <Image className='imageContainer' src={aboutImage} width={400} height={250}></Image>
                </div>
            </C.ContentContainer>
        </C.SectionContainer>
    )
}
export default About;