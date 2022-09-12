import styled from "styled-components";

export const Container=styled.div`
    

`;
export const OurTeamContent=styled.div`
    div:first-child{
        //position: absolute;
        //z-index: 1;
        //right:0;left:0;
        //background-color:rgba(0,0,0,0.8) ;
    }
     .title{
        text-align: center;
    }
`;
export const CardsContainer = styled.div`
    margin:3rem ;
    display: flex;
    //grid-template-columns: repeat(auto-fit,minmax(13rem,1fr));
    gap:1rem; 
    flex-wrap: wrap;
    justify-content: center;
    z-index: 2;
`;