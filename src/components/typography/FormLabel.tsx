import { Text } from "react-native"
import styles from './typography.styles'

interface Props {
    children: any,
    style?: object,
}

const FormLabel: React.FC<Props> = ({ children, style }) => {

    return (
        <Text style={{ ...styles.formLabel, ...style }}>{children}</Text>
    )

}

export default FormLabel