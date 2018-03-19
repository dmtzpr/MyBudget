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

    errorText: {
        color: '#a94442',
        fontSize: 18,
        marginBottom: 10,
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
