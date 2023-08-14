import styled from "styled-components";

export const ContainerFullWidth = styled.div`
  width: 100%;
  background-color: #212121;
  position: relative;

  @media (max-width: 600px) {
    width: 100%;
  }
`

export const Container = styled.section`
    max-width: calc(1170px + 2rem);
    padding: 4rem 1rem;
    margin: 0 auto;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    
    @media (min-width: 2000px) {
        max-width: calc(1170px + 5rem);
        padding: 0;
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        height: 35vh;
        padding-top: 1.5rem;
        width: unset;
        padding: unset;
    }

    .container-text{
        display: grid;
        width: 100%;
        height: 300px;

        @media (max-width: 600px) {
            place-items: center;
            padding: 1rem;
        }

        .texts{
            display: grid;
            
            .hero-title {
                font-size: 2.5rem;

                @media (max-width: 600px) {
                    margin-top: 1.5rem;
                    text-align: center;
                    font-size: 2.2rem;
                }
            }

            p {
                font-size: 1.5rem;

                @media (max-width: 600px) {
                    text-align: center;
                    font-size: 1.3rem;
                }
            }
        }

        a {
            background: ${props => props.theme.colors.secondary};
            width: 50%;
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 1rem;
            border-radius: 10px;
            text-decoration: none;
            color: white;
            font-size: 1.2rem;
            font-wheight: 600;
            transition: all 0.3s ease-in-out;

            @media (max-width: 600px) {
                width: 100%;
            }
            
            &:hover{
                transform: translateY(-10px);
                box-shadow: 0 10px 10px 3px ${props => props.theme.colors.shadow};
            }
        }
    }

    .container-image {
        display: flex;
        align-items: center;
        width: 100%;
        margin: 1rem;
        overflow: hidden;

        img {
            max-width: 800px;
            max-height: 800px;
            width: 90%;
            height: 100%;
            object-fit: contain;

            @media (max-width: 600px) {
                display: none;
            }
        }
    }
`
