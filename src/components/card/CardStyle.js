import React from 'react';
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    card_container: {
        width: '80%',
        backgroundColor: '#ffff',
        height: '20%',
        marginTop: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#cccccc',
        marginTop: 20,
        alignItems: 'center',
    },

    card_contents: {
        flexDirection: 'column',
        width: '90%',
    },

    main_title_text: {
        color: '#9e9e9e',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 15,
    },

    second_title_text: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 10,
    },

    paragraph_text:{
        color: '#b3b3b3',
    },
})

export default styles;