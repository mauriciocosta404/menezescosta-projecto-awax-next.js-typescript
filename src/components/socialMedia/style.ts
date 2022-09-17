import styled from "styled-components";

export const Container=styled.div`
    background-color: #fff;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    display: flex;
    gap: 2rem;
    .share{
        display: flex;
        gap: 1rem ;
        align-items: center;
        span{
            color: #999;
        }
    }
    .medias{
        display: flex;
        align-items: center;
        gap: .7rem;
    }

`;

interface IconsProps{
    color:string;
}
export const Icons = styled.div`
    
    >div{
        background-color: ${({color}:IconsProps)=>color};
        width:2rem;
        height: 2rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

`;