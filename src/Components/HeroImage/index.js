import React from 'react';
//Styles
import { Wrapper, Content, Text } from '../../Components/HeroImage/HeroImage.styles';

const HeroImage = (prop) => (
    <Wrapper image={prop.image}>
        <Content>
            <Text>
                <h1>{prop.title}</h1>
                <p>{prop.text}</p>
            </Text>
        </Content>
    </Wrapper>
)

export default HeroImage;