import { View } from "react-native"

// Components
import Container from "../Container"

// Typography
import H1 from "../../typography/H1"
import H2 from "../../typography/H2"


// Styles
import styles from './styles'

interface Props {
    title: string,
    subtitle?: string,
}

const Header: React.FC<Props> = ({ title, subtitle }) => {
    return (
        <View style={styles.header}>
            <Container style={styles.container}>
                <H1 color="#FFF" style={styles.h1}>{title}</H1>
                {subtitle && <H2 color="#FFF" style={styles.h1}>{subtitle}</H2>}
            </Container>
        </View>
    )
}

export default Header