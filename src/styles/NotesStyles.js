import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    image: {
        flex: 1,
    },
    navbar: {
        height: 50,
        marginBottom: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 28,
        backgroundColor: '#5583EE',
        opacity: 0.8,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    container: {
        flex: 4,
    },
    auth: {
        bottom: 0,
        width: '100%',
        height: '5%',
        backgroundColor: 'green',
        alignItems: 'center',
        marginTop: '1%'
    },
})

export { styles };