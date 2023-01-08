import React from "react";
import { Container, Logo } from "./style";
import { WidthContainer } from "../../styles/Global";

const Header: React.FC = () => {


    return (
        <WidthContainer>
            <Container>
                <div className="container-logo">
                    <Logo src="https://img.freepik.com/free-icon/test-tube_318-234529.jpg?w=2000" />
                </div>
            </Container>
        </WidthContainer>
    )
}

export default Header;