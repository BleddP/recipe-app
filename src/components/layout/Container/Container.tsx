import { View } from 'react-native'

// Styles
import styles from './styles'

interface Props {
    children: any,
    style?: object,
    padding?: boolean
}

const Container: React.FC<Props> = ({ children, style, padding }) => {
    return (
        <View style={{ ...styles.container, ...style, paddingTop: padding ? 24 : 0, paddingBottom: padding ? 24 : 0 }}>{children}</View>
    )
}

export default Container