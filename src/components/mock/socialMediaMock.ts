import pinterest from '../../../images/pinterest.png';
import twiter from '../../../images/twitter.png';
import linkedin from '../../../images/linkedin.png';
import facebook from '../../../images/facebook.png';
import googlePlus from '../../../images/googlePlus.png';

interface SocialMediaProps{
    url:string | any,
    color:string
}

export const SocialMediaMock:SocialMediaProps[]=[
    {
        url:twiter,
        color:'#3dc8ff',    
    },
    {
        url: linkedin,
        color: '#3db1ff',
    }, 
    {
        url: facebook,
        color: '#093ea0',
    },
    {
        url: googlePlus,
        color: 'orange',
    },
    {
        url: pinterest,
        color: 'red',
    }
]