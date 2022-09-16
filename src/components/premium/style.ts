import styled from "styled-components";

export const Container=styled.section`
    text-align: center;
    .title{
        text-align: center;
        span{
            color: #999;
        }
    }
    .bookContainer{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 3rem;
        flex-wrap: wrap;
        padding: 2rem 0;
        border-bottom: 1px solid #ccc;
        .content{
            >div{
                margin-bottom: 1.7rem;
            }
            .sub-title{
                display: flex;
                gap: 1rem;
            }
            p{
                color: #999;
                text-align: start;
            }
            ul li{
                text-align: start;
                color: #999;
            }
        }
    }
`;