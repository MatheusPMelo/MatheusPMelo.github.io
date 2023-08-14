import styled from "styled-components";

export const ContainerFullWidth = styled.div`
  width: 100%;
  position: relative;
  background: #212121;
  padding: 4rem 0;
  overflow: hidden;

  @media (max-width: 600px) {
    width: 100%;
    padding: 0 0 4rem 0 ;
  }
`

export const Container = styled.section`
    max-width: calc(1170px + 2rem);
    padding: 3rem 1rem;
    margin: 0 auto;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }

    .container-about-me{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        h1 {
            font-size: 2.5rem;
            
            @media (max-width: 600px) {
                font-size: 2rem;
                margin: 1rem 0;
            }
        }
        p {
            font-size: 1.5rem;

            @media (max-width: 600px) {
                font-size: 1.2rem;
            }
        }
    }

    .container-social-media{
        display: flex;
        justify-content: center;
        gap: 1rem;

        >div {
            padding: 1rem;

            @media (max-width: 600px) {
                padding: 3rem 0 0 0;
            }
            a > svg {
                width: 30px;
                height: 30px;
                transition: all .2s ease-in-out;

                @media (min-width: 768px) {
                    &:hover{
                        color: #fff;
                    }
                }

                @media (max-width: 600px) {
                    width: 45px;
                    height: 45px;
                }
            }
        }
    }
`

export const AboutMeCard = styled.div`
    background: linear-gradient(90deg, ${props => props.theme.colors.secondary}, transparent);
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(268px, 1fr));
    align-items: center;
    padding: 1rem;
    border-radius: 1rem;
    width: 100%;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        width: calc(100% - 1rem);
        background: linear-gradient(180deg, ${props => props.theme.colors.secondary}, transparent);
    }

    .container-img{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;

        img{
            width: 200px;
            height: 200px;
            border-radius: 50%;
            object-fit: contain;
            box-shadow: 0 0 10px 1px ${props => props.theme.colors.shadow}
        }
    }

    .container-content-text{
        display: grid;
        gap: 1rem;
        
        @media (max-width: 600px) {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
        }
        .company,
        .location{
            font-size: 1.2rem;
        }

        .following{
            font-size: 1rem;
        }
        .followers{
            margin: 0 1rem 0 0;
            font-size: 1rem;

            @media (max-width: 600px) {
                margin: unset;
            }
        }

    }
`
