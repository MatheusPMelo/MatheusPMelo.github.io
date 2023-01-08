import styled from "styled-components";

export const ContainerAside = styled.aside`
    position: fixed;
    top: 0;
    right: 0;
    background-color: ${props => props.theme.colors.secondary};
    box
    z-index: 1;
    height: 100vh;
    width: 3rem;
    box-shadow: 0 0 10px 5px ${props => props.theme.colors.shadow};

    animation: loadAnimated 1.5s;

    @keyframes loadAnimated {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @media (max-width: 600px) {
        width: 100vw;
        height: 4rem;
        left: 0;
        top: calc(100% - 4rem);
        display: grid;
        place-items: center;
    }

    .containerNav {
        .listNav {
            display: flex;
            flex-direction: column;
            justify-content: center;
            row-gap: 2rem;
            height: 100vh;

            @media (max-width: 600px) {
                flex-direction: row;
                align-items: center;
                height: 2rem;
                column-gap: 2rem;
            }

            li {
                list-style: none;
                a {
                    text-decoration: none;
                    color: ${props => props.theme.colors.text};
                    position: relative;
                    display: flex;
                    justify-content: center;

                    &::after{
                        content: "";
                        position: absolute;
                        width: 20px;
                        height: 0px;
                        border-radius: 4px;
                        top:120%;
                        background-color: ${props => props.theme.colors.text};
                        transition: all 0.13s ease-in-out;
                    }

                    &:hover::after{
                        height: 4px;
                    }

                    svg {
                        @media (max-width: 600px) {
                            height: 1.5rem;
                            width: 1.5rem;
                        }
                    }
                }
            }
        }
    }
`