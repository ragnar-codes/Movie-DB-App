import React from "react";
import { headerSize } from "tar";
//Styles
import { Wrapper, Content } from "./Grid.styles";

const Grid = ({header, children}) => (
    <Wrapper>
        <h1>{header}</h1>
        <Content>{children}</Content>
    </Wrapper>
)


export default Grid;