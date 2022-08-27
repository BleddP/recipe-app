import { StyleSheet } from "react-native";

const defaultColor = "#28252e"

const styles = StyleSheet.create({
    h1: {
        fontSize: 32,
        marginBottom: 12,
        fontWeight: '700',
        color: defaultColor
    },
    h2: {
        fontSize: 24,
        marginBottom: 6,
        fontWeight: '700',
        color: defaultColor
    },
    h3: {
        fontSize: 20,
        marginBottom: 6,
        fontWeight: '600',
        color: defaultColor
    },
    h4: {
        fontSize: 16,
        marginBottom: 6,
        fontWeight: '600',
        color: defaultColor
    },
    paragraph: {
        fontSize: 16,
        marginBottom: 6,
        fontWeight: '400',
        color: defaultColor
    },
    span: {
        fontSize: 16,
        fontWeight: '400',
        color: defaultColor
    },
    small: {
        fontSize: 12,
        fontWeight: '400',
        color: defaultColor
    }
})

export default styles