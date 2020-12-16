import React from 'react';
import {Container, Contents, Title, SecondTitle, Paragraph} from './CardStyles'

export default function Card(props){
    return(
        <Container>
            <Contents>
                <Title>{props.title}</Title>

                <SecondTitle>{props.second_title}</SecondTitle>

                <Paragraph>{props.paragraph}</Paragraph>

                <SecondTitle>{props.another_title}</SecondTitle>
                    
                <Paragraph>{props.another_paragraph}</Paragraph>
            </Contents>
        </Container>
    )
}