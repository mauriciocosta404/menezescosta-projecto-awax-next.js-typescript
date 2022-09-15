import styled from "styled-components";

interface cardProps{
    color:string;
}

export const Container=styled.div`
    background-color: #fff;
    padding: 2rem 4rem;
    text-align: center;
    span{
        font-weight: 600;
    }
    h2{
        margin-top: .5rem;
        font-weight: 900;
    }
    small{
        color: #999;
    }
    button{
        color: #fff;
        background-color: ${({color}:cardProps)=>color};
        padding: .7rem 1.7rem;
        border-radius: 5rem;
        margin-top: 1rem;
        font-weight: 600;
    }
    p{
        margin:.5rem 0;
        color: #666;
    }
    >div div{
        width: 1rem;
        height: .1rem;
        background-color: #000;
        margin: auto;
    }
    
`;