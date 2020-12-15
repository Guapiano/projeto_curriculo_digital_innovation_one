import React from 'react';
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: '#f0f0f7',
        justifyContent: 'center',
        alignItems: 'center',
    },

    main_header: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',   
    },

    user_image: {
        width: 150,
        height: 150,
        borderRadius: 150,
    },

    my_name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
    },

    my_profession: {
        fontSize: 16,
        color: '#808080',
    },

    icons_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '20%',
        marginTop: 20,
    },

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
        //backgroundColor: 'red',
    },

    school_text: {
        color: '#9e9e9e',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 15,
    },

    course_text: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 10,
    },

    cedup_text:{
        color: '#b3b3b3',
    },

    course_two_text: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 10,
    },

    senai_text: {
        color: '#b3b3b3',
    },

    experience_text: {
        color: '#9e9e9e',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 15,
    },

    sector_text: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 10,
    },

    cremer_text: {
        color: '#b3b3b3',
    },

    advisor_text: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 10,
    },

    master_text: {
        color: '#b3b3b3',
    },
    
})

export default styles;