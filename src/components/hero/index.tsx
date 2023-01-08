import React from 'react';
import { Container, ContainerFullWidth } from './style';
import ReactTypingEffect from 'react-typing-effect';

const Hero: React.FC = () => {
    return (
        <ContainerFullWidth>
            <Container>
                <div className="container-text">
                    <div className="texts">
                        <h1 className='hero-title'>Desenvolvedor <ReactTypingEffect eraseDelay={2500} speed={300} text={["Front End", "Mobile"]} /></h1>
                        <p>React e React Native</p>
                    </div>
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