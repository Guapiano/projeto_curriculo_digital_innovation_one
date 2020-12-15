import React from 'react';
import {View, Text} from 'react-native'
import styles from './CardStyle'

export default function Card(props){
    return(
        <View style={styles.card_container}>
            <View style={styles.card_contents}>
                <Text style={styles.main_title_text}>{props.title}</Text>

                <Text style={styles.second_title_text}>{props.second_title}</Text>

                <Text style={styles.paragraph_text}>{props.paragraph}</Text>

                <Text style={styles.second_title_text}>{props.another_title}</Text>
                    
                <Text style={styles.paragraph_text}>{props.another_paragraph}</Text>
            </View>
        </View>
    )
}