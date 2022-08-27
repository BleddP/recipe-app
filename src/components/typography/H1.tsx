import { Text } from "react-native"
import styles from './typography.styles'

interface Props {
    children: any,
    style?: object,
    color?: string
}

const H1: React.FC<Props> = ({ children, style, color }) => {
    if (color) {
        return (
            <Text style={{ ...styles.h1, ...style, color: color }}>{children}</Text>
        )
    } else {
        return (
            <Text style={{ ...styles.h1, ...style }}>{children}</Text>
        )
    }
}

export default H1