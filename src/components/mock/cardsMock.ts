import mulher1 from '../../../images/mulher1.png';
import mulher2 from '../../../images/mulher2.png';
import homem1 from '../../../images/homem1.png';
import twitter from '../../../images/twitter.png';
import web from '../../../images/web.png';
import linkedin from '../../../images/linkedin.png';
import facebook from '../../../images/facebook.png';
import pinterest from '../../../images/pinterest.png';
import googlePlus from '../../../images/googlePlus.png';
import telefone from '../../../images/telefone.png';

interface OurTeamProps{
    url:string | any,
    name:string,
    profetion:string,
}

interface IconsProps{
    url:string | any;  
}

export const OurTeamMock:OurTeamProps[]=[
    {
        url:mulher1,
        name:'JANE DOE',
        profetion:'Master mind'
    },
    {
        url: homem1,
        name: 'MIKE SHILLER',
        profetion: 'Creative head'
    },
    //{
    //    url: homem1,
    //    name: 'MIKE SHILLER',
    //    profetion: 'Creative head'
    //  },
    {
        url: mulher2,
        name: 'ANNA JONS',
        profetion: 'Technical lead'
    }
];

export const IconsCards:IconsProps[]=[
    { url: twitter},
    { url: web },
    { url: linkedin },
    { url: facebook },
    { url: pinterest },
    { url: googlePlus },
    { url: telefone }
];