import React from 'react';
import { Container, ContainerFullWidth } from './style';
import ReactTypingEffect from 'react-typing-effect';
import hero from "../../../public/image/hero.png";

const Hero: React.FC = () => {
    return (
        <ContainerFullWidth>
            <Container>
                <div className="container-text">
                    <div className="texts">
                        <h1 className='hero-title'>Desenvolvedor <ReactTypingEffect eraseDelay={2500} speed={300} text={["Front End", "Mobile"]} /></h1>
                        <p>Vue, React e React Native</p>
                    </div>
                    <a href="#contact">Contato</a>
                </div>
                <div className="container-image">
                    <img src={hero} alt="arte digital de um computador com linhas minimalistas"/>
                </div>
            </Container>
        </ContainerFullWidth>
    )
}

export default Hero;