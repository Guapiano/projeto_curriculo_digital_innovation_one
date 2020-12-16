import React from 'react';
import {Alert, TouchableOpacity } from 'react-native';
import {AntDesign} from '@expo/vector-icons/';
import Card from '../components/card/Card';
import {Container, Header, UserImage, Name, Profession, Icons} from './HomeScreenStyles'

export default function Home(){

    function socialNetworks(social_networks){
        switch(social_networks){
            case 'linkedin-square':
                Alert.alert('Meu LinkedIn','https://www.linkedin.com/in/demianpabst/')
            break;
        
            case 'github':
                Alert.alert('Meu GitHub','https://github.com/Guapiano')
            break;
        }
    }

    return(
        <Container >
            <Header>
                <UserImage source={require('../assets/user.jpg')}></UserImage>

                <Name>Demian Pabst Guapiano</Name>

                <Profession>UI Designer e Desenvolvedor Iniciante</Profession>

                <Icons>
                    <TouchableOpacity 
                    onPress={() => socialNetworks('github')}
                    >
                        <AntDesign 
                        name="github" 
                        size={30}
                        ></AntDesign>

                    </TouchableOpacity>

                    <TouchableOpacity 
                    onPress={() => socialNetworks('linkedin-square')}
                    >
                        <AntDesign 
                        name="linkedin-square" 
                        size={30}
                        ></AntDesign>

                    </TouchableOpacity>
                </Icons>
            </Header>

            <Card 
            title="Formação"
            second_title="Técnico de Informática"
            paragraph="Cedup Hermann Hering"
            another_title="Aprendizagem Industrial em Assistente Administrativo"
            another_paragraph="SENAI/SC - Serviço Nacional de Aprendizagem Industrial"
            ></Card>
            
            <Card 
            title="Experiência Profissional"
            second_title="Jovem Aprendiz no setor de Vendas"
            paragraph="Cremer S.A"
            another_title="Orientador Educacional"
            another_paragraph="Escola de Qualificação Profissional Master Premium"
            ></Card>
        </Container>
    )
}