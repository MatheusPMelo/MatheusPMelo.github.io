import styled from "styled-components";

export const ContainerFullWidth = styled.div`
  width: calc(100% - 3rem);
  background-color: #212121;
  position: relative;

  @media (max-width: 600px) {
    width: 100%;
  }
`

export const Container = styled.header`
    padding: 0 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    margin: 0 20px;
    width: 100%;
    
    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        height: 35vh;
        padding-top: 1.5rem;
    }

    .container-text{
        display: grid;
        row-gap: 1rem;

        @media (max-width: 600px) {
            place-items: center;
        }

        h1 {
            font-size: 2.5rem;

            @media (max-width: 600px) {
                text-align: center;
                font-size: 1.5rem;
            }
        }

        p {
            font-size: 1.5rem;

            @media (max-width: 600px) {
                text-align: center;
                font-size: 1rem;
            }
        }

        a {
            background: ${props => props.theme.colors.secondary};
            width: 50%;
            text-align: center;
            padding: 1rem;
            border-radius: 10px;
            text-decoration: none;
            color: white;
            font-size: 1.2rem;
            font-wheight: 900;

            @media (max-width: 600px) {
                width: 100%;
                margin: 5rem 0 0 0;
                
                &:hover{
                    transform: scale(1);
                    box-shadow: 0 0 5px 3px ${props => props.theme.colors.shadow};
                }
            }
            
            &:hover{
                transform: scale(1.05);
                box-shadow: 0 0 5px 3px ${props => props.theme.colors.shadow};
            }
        }
    }

    .container-image {
        display: flex;
        align-items: center;

        img {
            max-width: 800px;
            max-height: 800px;
            width: 700px;
            height: 700px;
            object-fit: contain;

            @media (max-width: 600px) {
                display: none;
            }
        }
    }
`