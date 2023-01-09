import React from "react";
import { Container, Logo } from "./style";
import { WidthContainer } from "../../styles/Global";

const Header: React.FC = () => {


    return (
        <WidthContainer>
            <Container>
                <div className="container-logo">
                    <Logo src="/image/logo.png" />
                </div>
            </Container>
        </WidthContainer>
    )
}

export default Header;