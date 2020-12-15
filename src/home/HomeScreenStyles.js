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
    
})

export default styles;