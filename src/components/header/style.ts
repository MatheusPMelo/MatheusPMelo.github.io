import styled from "styled-components";

export const Container = styled.header`
   // padding: 0 2rem;
    display: flex;
    align-items: center;
    margin: 20px 0;
    width: 100%;

    @media (max-width: 600px) {
        justify-content: center;
    }
`

export const Logo = styled.img`
    width: 50px;
    height: auto;
    object-fit: contain;

    @media (max-width: 600px) {
        width: 30px;
    }
`