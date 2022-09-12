import styled from "styled-components";


export const Container = styled.header`

    >div{
        color:#B28756;
        display: flex;
        //flex-direction: column;
        font-weight: 600;
        align-items: center;
        gap: .5rem;
        font-size: 1.3rem;
    }

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6rem;
    height: 70px;
    //B28756
    background-color: #000;
    padding: 1rem;
`;

export const NavContainer=styled.nav`
    font-weight:600;
    font-size: 1rem;
    ul{
        flex:1;
        justify-content: flex-end;
        list-style-type: none;
        display: flex;
        gap:1rem;
        flex-wrap: wrap;
    }
    a{
        text-decoration-line: none;
        color: #fff;
    }
`;
export const Banner = styled.div`
    height: 90vh;
    >div{
       
       // background: url('../../../images/bg.jpg');
        position: absolute;
        top: 3.6rem;left:0;right:0;bottom:0;
        background-color   :rgba(0,0,0,0.8) ;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        .description{   
            text-align: center;
            h2{
                font-size: 3.6rem;
                font-weight: 1900;
            }
            .second{
                color: #B28756;
            }
            p{
                font-size: 1.5rem;
            }
      
            color: #fff;
        }
    }
 
`;