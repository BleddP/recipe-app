import { Text } from "react-native"
import styles from './typography.styles'

interface Props {
    children: any,
    style?: object,
    color?: string
}

const Small: React.FC<Props> = ({ children, style, color }) => {
    if (color) {
        return (
            <Text style={{ ...styles.small, ...style, color: color }}>{children}</Text>
        )
    } else {
        return (
            <Text style={{ ...styles.small, ...style }}>{children}</Text>
        )
    }
}

export default Small