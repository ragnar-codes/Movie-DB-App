import React from "react";

import RMDB from '../../images/react-movie-logo.svg';

import Logo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";


const Header = () => (
    <Wrapper className="wrapper">
        <Content>
            <LogoImg src={RMDB} alt="rmdb-logo" />
            <TMDBLogoImg src={Logo} alt="tmdb-logo" /> 
        </Content>
    </Wrapper>
);


export default Header;