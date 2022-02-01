import { StyleSheet } from "react-native"

const styles=StyleSheet.create({
    inputeBlock: {
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'center',
    },
    input: {
        backgroundColor: 'white',
        fontSize: 19,
        width: '75%',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#3949ab',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    add: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: '1%',
        width: '13%',
        backgroundColor: '#3949ab',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    text: {
        fontSize: 40,
        color: 'white',
    },
})

export {styles};