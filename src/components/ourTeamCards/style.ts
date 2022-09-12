import styled from "styled-components";

export const Container=styled.div`
   background-color: #fff;
   padding: 2rem;
   max-width: fit-content;
   .title{
    margin:1.5rem 0;
   }
    .icons{
        display: flex;
        justify-content: space-around;
    }
    .icon{
        width: 2.1rem;
        height: 2.1rem;
        background-color: #ccc;
        border-radius:50% ;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 .3rem;
    }
    .icon:first-child{
        background-color: #B28756 ;
    }
`;
