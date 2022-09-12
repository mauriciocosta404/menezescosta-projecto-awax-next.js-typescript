import styled from "styled-components";

export const SectionContainer=styled.section`
    >div{
        margin-bottom: 1rem;
        text-align: center;
        span{
            color: #999;
        }
    }
`;

export const ContentContainer= styled.div`
    display: flex;
    gap: 1rem;
    div{
        text-align: justify;
        font-size: 1.1rem;
        max-width: 33rem;
    }
    .imageContainer{
        box-shadow: 0 .5rem 1.5rem rgba(0,0,0,0.1);
    }
`;