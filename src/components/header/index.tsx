import React from "react";
import { Container, Logo } from "./style";
import { WidthContainer } from "../../styles/Global";

import logo from "../../../public/image/logo.png"

const Header: React.FC = () => {


    return (
        <WidthContainer>
            <Container>
                <div className="container-logo">
                    <Logo src={logo} />
                </div>
            </Container>
        </WidthContainer>
    )
}

export default Header;