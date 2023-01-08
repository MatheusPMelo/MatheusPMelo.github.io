import styled from "styled-components";

export const ContainerFullWidth = styled.div`
  width: calc(100% - 3rem);
  position: relative;

  @media (max-width: 600px) {
    width: 100%;
  }
`

export const Container = styled.section`
    max-width: calc(1170px + 2rem);
    padding: 1rem;
    margin: 0 auto;
    width: 100%;

    h1 {
        padding: 3rem 0;
        font-size: 3rem;
        font-weight: 700;
    }

    .container-cards {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 1rem;

        @media (max-width: 600px) {
            grid-template-columns: 1fr;
            margin-bottom: 4rem;
        }
    }
`

export const Card = styled.div`
    background: ${props => props.theme.colors.shadow};
    padding: 1rem;
    border-radius: 1rem;

    .title {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    .container-tags{
        width: 100%;
        .tag{
            font-size: 0.8rem;
            color: ${props => props.theme.colors.text};
            border: 2px solid ${props => props.theme.colors.tertiary};
            padding: 3px 10px;
            border-radius: 10px;
            margin: 3px;
        }
    }

    .tech {
        margin: 30px 0;
    }
`