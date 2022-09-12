import { createGlobalStyle } from "styled-components";

export const GlobalStyle=createGlobalStyle`
    *{
        margin: 0; padding:0;
        box-sizing: border-box;
        text-decoration: none;
        transition: all .5s linear;
        outline: none;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    body{
        background-color: #eee;
        font-size: 93.5%;
    }
    button{
        cursor: pointer;
        border: none;
    }
    section{
        padding: 2rem 15% ;
    }
    section:nth-child(even){
        background-color: #eee;
    }
`;