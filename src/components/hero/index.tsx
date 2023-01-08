import React from 'react';
import { Container, ContainerFullWidth } from './style';

const Hero: React.FC = () => {
    return (
        <ContainerFullWidth>
            <Container>
                <div className="container-text">
                    <h1>Desenvolvedor Web</h1>
                    <p>React e React Native</p>
                    <a href="#contact">Contato</a>
                </div>
                <div className="container-image">
                    <img src="/image/hero.png" />
                </div>
            </Container>
        </ContainerFullWidth>
    )
}

export default Hero;