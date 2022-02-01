import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    main: {
        flex:1,
        backgroundColor: 'silver',
    },
    auth: {
        height: 50,
        marginBottom: 50,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 28,
        backgroundColor: '#5583EE',
        opacity: 0.8,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    loginPass: {
        paddingHorizontal: '5%',
        padding: 5,
    },
    input: {
        borderStyle: 'solid',
        borderWidth: 2,
        height: 50,
        backgroundColor: 'white',
        borderColor: '#3949ab',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        fontSize: 19,
    },
    text: {
        paddingBottom: '2%',
        fontSize: 20,
        paddingLeft: 5,
    },
    button: {
        borderStyle: 'solid',
        borderWidth: 2,
        height: 35,
        backgroundColor: '#5583EE',
        borderColor: '#5583EE',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        alignItems: 'center',
        marginTop: '5%',
        marginBottom: 50,
    },
    buttonEnter: {
        borderStyle: 'solid',
        borderWidth: 2,
        height: 35,
        backgroundColor: 'green',
        borderColor: 'green',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        alignItems: 'center',
        marginTop: '1%',
    },
    image: {
        flex:1, 
        justifyContent: 'center'
    }
})

export { styles };