import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    button: {
        width: 48,
        height: 48,
        borderColor: '#28cfb3',
        borderWidth: 2,
        borderRadius: '50%',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 6
    },
    tooltipWrapper: {
        transform: [{translateY: -30}]
    },
    tooltip: {
        position: 'absolute',
        top: 0,
        left: 0,
        minWidth: 200,
        backgroundColor: '#FFF',
        borderRadius: 5,
        padding: 6,
    },
    text: {
        marginBottom: 0,
        textAlign: 'center',
    }
})

export default styles