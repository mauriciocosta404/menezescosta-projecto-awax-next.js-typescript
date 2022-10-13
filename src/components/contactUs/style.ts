import styled from "styled-components";

export const Container = styled.div`
    .title{
        text-align: center;
        margin: 3rem;
        h2{
            font-weight: bolder;
        }
        span{
            color: #999;
            font-size: .7rem;
        }
        margin-bottom: 3rem;
    }
    .input-container{
        margin: auto;
        max-width: 30rem;

        .flex{
            display: flex;
            justify-content: space-between;
            input{
                width: 13rem;
            }
        }
        input{
            width: 100%;
        }
        div{
            margin-top: 1rem;
            border: none;
        }
    }
`;