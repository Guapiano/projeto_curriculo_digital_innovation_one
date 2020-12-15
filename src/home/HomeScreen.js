import React from 'react';
import styles from './HomeScreenStyles'
import { View, Text, Image, Alert, TouchableOpacity } from 'react-native';
import {AntDesign} from '@expo/vector-icons/'
import Card from '../components/card/Card'

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
        <View style={styles.main_container}>

            <View style={styles.main_header}>

                <Image 
                source={require('../assets/user.jpg')} 
                style={styles.user_image}
                ></Image>

                <Text 
                style={styles.my_name}>Demian Pabst Guapiano</Text>

                <Text 
                style={styles.my_profession}>UI Designer e Desenvolvedor Iniciante</Text>

                <View 
                style={styles.icons_container}>

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
            
                </View>
            </View>

            <Card 
            title="Formação"
            second_title="Técnico de Informática"
            paragraph="Cedup Hermann Hering"
            another_title="Qualificação Profissional em Assistente Administrativo"
            another_paragraph="SENAI/SC - Serviço Nacional de Aprendizagem Industrial"
            ></Card>
            
            <Card 
            title="Experiência Profissional"
            second_title="Jovem Aprendiz em Vendas"
            paragraph="Cremer S.A"
            another_title="Orientador"
            another_paragraph="Escola de Qualificação Profissional Master Premium"
            ></Card>
        </View>
    )
}
