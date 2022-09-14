import styled from "styled-components";

export const Container=styled.div`
    margin: 3rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(10rem,1fr));
    gap: 1rem;
    background-color: #fff;
    padding: 2rem;
    flex-wrap: wrap;
    box-shadow: 0 .5rem 1.5rem rgba(0,0,0,0.1);
    text-align: center;
    border: 1px solid #cccc;
`;