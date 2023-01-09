import React from 'react';
import { Container, ContainerFullWidth } from './style';
import ReactTypingEffect from 'react-typing-effect';
import hero from '../../assets/img/hero.png';

const Hero: React.FC = () => {
    return (
        <ContainerFullWidth>
            <Container>
                <div className="container-text">
                    <div className="texts">
                        <h1 className='hero-title'><ReactTypingEffect eraseDelay={2500} speed={300} text={["Front End", "Mobile"]} /> Developer</h1>
                        <p>Vue, React, React Native</p>
                    </div>
                    <a href="#contact">Contact</a>
                </div>
                <div className="container-image">
                    <img src={hero} alt="digital art"/>
                </div>
            </Container>
        </ContainerFullWidth>
    )
}

export default Hero;