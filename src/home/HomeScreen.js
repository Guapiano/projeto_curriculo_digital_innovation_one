import React from 'react';
import styles from './HomeScreenStyles'
import { View, Text, Image} from 'react-native';
import {AntDesign} from '@expo/vector-icons/'

export default function Home(){
    return(
        <View style={styles.main_container}>
            <View style={styles.main_header}>
                <Image source={require('../assets/user.jpg')} style={styles.user_image}></Image>
                <Text style={styles.my_name}>Demian Pabst Guapiano</Text>
                <Text style={styles.my_profession}>UI Designer e Desenvolvedor Iniciante</Text>
                <View style={styles.icons_container}>
                    <AntDesign name="github" size={30}></AntDesign>
                    <AntDesign name="linkedin-square" size={30}></AntDesign>
                </View>
            </View>

            <View style={styles.card_container}>
                <View style={styles.card_contents}>
                    <Text style={styles.school_text}>Formação</Text>
                    <Text style={styles.course_text}>Técnico de Informática</Text>
                    <Text style={styles.cedup_text}>Cedup Hermann Hering</Text>
                    <Text style={styles.course_two_text}>Qualificação Profissional em Assistente Administrativo</Text>
                    <Text style={styles.senai_text}>SENAI/SC - Serviço Nacional de Aprendizagem Industrial</Text>
                </View>
            </View>

            <View style={styles.card_container}>
                <View style={styles.card_contents}>
                    <Text style={styles.experience_text}>Experiência Profissional</Text>
                    <Text style={styles.sector_text}>Jovem Aprendiz em Vendas</Text>
                    <Text style={styles.cremer_text}>Cremer S.A</Text>
                    <Text style={styles.advisor_text}>Orientador</Text>
                    <Text style={styles.master_text}>Escola de Qualificação Profissional Master Premium</Text>
                </View>
            </View>
        </View>
    )
}
