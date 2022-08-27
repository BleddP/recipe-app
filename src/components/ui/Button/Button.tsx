import { TouchableOpacity, View } from "react-native";

// Components
import H4 from "../../typography/H4";

// Styles
import styles from "./styles";

interface Props {
    title: string,
    onPress: () => void
}

const Button: React.FC<Props> = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <View>
                <H4 color='#FFF' style={styles.text}>{title}</H4>
            </View>
        </TouchableOpacity>
    )
}

export default Button