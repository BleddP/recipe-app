import { Text } from "react-native"
import styles from './typography.styles'

interface Props {
    children: any,
    style?: object,
    color?: string
}

const Paragraph: React.FC<Props> = ({ children, style, color }) => {
    if (color) {
        return (
            <Text style={{ ...styles.paragraph, ...style, color: color }}>{children}</Text>
        )
    } else {
        return (
            <Text style={{ ...styles.paragraph, ...style }}>{children}</Text>
        )
    }
}

export default Paragraph