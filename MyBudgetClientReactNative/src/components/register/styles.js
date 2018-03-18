import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    content: {
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 50,
    },

    title: {
        fontSize: 30,
    },

    signUpForm: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },

    inputBox: {
        width: 300,
        backgroundColor: '#fff',
        borderRadius: 6,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#333',
        borderWidth: 1,
        borderColor: '#ccc',
        marginVertical: 5,
    },

    signUpButton: {
        width: 300,
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderRadius: 6,
        marginVertical: 10,
        paddingVertical: 10,
    },

    signUpButtonText: {
        fontSize: 18,
        fontWeight: '400',
        color: '#333',
        textAlign: 'center',
    },

    cancelButton: {
        width: 300,
    },

    cancelButtonText: {
        color: '#337ab7',
        textAlign: 'right',
        paddingHorizontal: 10,
    },
});
