import * as C from './style';

const SomeFacts = () => {
    return (
        <C.Container>
            <div className='title'>
                <h2>SOME FACTS</h2>
                <span>ABOUT OUR WORK</span>
            </div>
            <C.Services>
                <div>
                    <div className='number'>1000</div>
                    <div className='border'></div>
                    <div className='name'>DESIGN PROJECTS REALIZED</div>
                    <small>Lorem ipsum dolor sit amet consectetur eueue ueue78</small>
                </div>
                <div>
                    <div className='number'>900</div>
                    <div className='border'></div>
                    <div className='name'>PHOTOS</div>
                    <small>Lorem ipsum dolor sit amet consectetur eueue ueue78</small>
                </div>
                <div>
                    <div className='number'>500</div>
                    <div className='border'></div>
                    <div className='name'>MARKETING IDEIAS</div>
                    <small>Lorem ipsum dolor sit amet consectetur eueue ueue78</small>
                </div>
                <div>
                    <div className='number'>100</div>
                    <div className='border'></div>
                    <div className='name'>EXIBHITIONS</div>
                    <small>Lorem ipsum dolor sit amet consectetur eueue ueue78</small>
                </div>
            </C.Services>
        </C.Container>
    );
}
export default SomeFacts;