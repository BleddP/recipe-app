import { StyleSheet } from "react-native";
import { boxShadow } from "../../../styles";

const styles = StyleSheet.create({
    card: {
        height: 'auto',
        width: 165,
        marginBottom: 0,
        borderRadius: 15,
        ...boxShadow
    },
    solid: {
        backgroundColor: "#FFF"
    }, 
    content: {
        padding: 12,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 120,
        marginBottom: 6,
        resizeMode: 'contain',
        transform: [{translateX: -50}, {translateY: 12}]
    }
})

export default styles