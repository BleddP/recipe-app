import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingLeft: 48,
        paddingRight: 48,
        transform: [{translateY: -18}]
    },
    searchbar: {
        backgroundColor: "#FFF",
        width: '100%',
        height: 36,
        borderRadius: '25px',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 12,
        paddingRight: 32
    },
    input: {
        width: '100%'
    }
})

export default styles