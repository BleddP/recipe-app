import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        width: windowWidth / 2
    },
    name: {
        width: (windowWidth / 2) - 48
    },
    amount: {
        width: 'auto'
    },
    unit: {
        width: 'auto'
    },
    cal: {
        width: 'auto'
    }
})

export default styles