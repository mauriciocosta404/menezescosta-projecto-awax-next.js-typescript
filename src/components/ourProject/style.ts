import styled from "styled-components";

export const Container=styled.section`
    .title{
        text-align: center;
        h2{
            font-weight: 600;
        }
        span{
            color: #999;
        }
    }
    .slide-controler{
        margin: 2rem;    
        display: flex;
        justify-content: center;
        ul{
            list-style-type: none;
            display: flex;
            justify-content: center;
            flex-wrap:wrap ;
            border: 1px solid #ccc;
            width: max-content;
            padding:.1rem;
            border-radius: 5rem;
            background-color: #c0c0c0;
        }
        
        li{
            padding:.7rem 1.3rem;
        }
        li:not(:first-child){
            border-left:#ccc solid 1px ;
        }
    }
    .images{
        display:grid;
        grid-template-columns: repeat(auto-fit,minmax(13rem,1fr));
        gap:1.5rem;
    }
    .btnContainer{
        display: flex;
        justify-content: center;
    }
`;