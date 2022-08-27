import { StyleSheet } from "react-native";
import { boxShadow } from "../../../styles";

const styles = StyleSheet.create({
    toaster: {
        backgroundColor: '#FFF',
        position: 'absolute',
        bottom: 32,
        marginLeft: 24,
        width: '100%',
        marginBottom: 0,
        borderRadius: 15,
        ...boxShadow
    },
    background: {
        padding: 12,
    },
    text: {
        textAlign: 'center',
    }
})

export default styles