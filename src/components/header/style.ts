import styled from "styled-components";

export const Container = styled.header`
    padding: 2rem 0;
    display: flex;
    align-items: center;
    width: 100%;

    @media (max-width: 600px) {
        justify-content: center;
    }
`

export const Logo = styled.img`
    width: 150px;
    object-fit: contain;

    @media (max-width: 600px) {
        width: 100px;
    }
`