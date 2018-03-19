import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    content: {
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 50,
    },

    signInForm: {
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
    },

    emptyTopBorderRadius: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
    },

    emptyBottomBorderRadius: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
});
