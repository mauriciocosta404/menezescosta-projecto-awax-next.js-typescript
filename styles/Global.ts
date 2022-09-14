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
    ul{
        list-style-type: none;
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
        padding: 2rem 12% ;
    }
    section:nth-child(even){
        background-color: #eee;
    }
    .bar{
        display: none;
    }
    .menu-mobile{
        display: none;
    }
    @media (max-width:768px){
        html{
            font-size: 80.6%;
        }
        nav .menu{
            display: none;
        }
        //.service{
          //  border-left: none;
          //  border-right: none;
        //}
         .menu-mobile{
            display: block;
            a{
                color: #eee;
            }
            a:hover{
                color: #B28756;
            }
            z-index: 8;
            position: absolute;
            right: 0;top:5.4rem;bottom:0;
            background-color   :rgba(0,0,0,0.8) ;
            font-size:1.6rem;
            padding: 2.8rem;
            width:23rem;
            li{
                margin:0.8rem 0 ;
            }
        }
        section{
            padding: 1rem 10%;
        }
        .bar{
            display: block;
            cursor: pointer;
        }
        .header{
            display: flex;
            justify-content: space-between;
            padding: 0 3rem;
        }
    }
`;