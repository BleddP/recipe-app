import { SafeAreaView, View, TextInput as Input } from "react-native";

// Components
import FormLabel from "../../typography/FormLabel";

// Styles
import styles from './styles'

interface Props {
    id: number | string,
    value: string,
    onChange: (id: number | string, newValue: string) => void,
    placeholder?: string,
    label?: number | string,
    style?: object
}

const TextInput: React.FC<Props> = ({ id, value, onChange, placeholder, label, style }) => {

    const handleChange = (newValue: string) => {
        onChange(id, newValue)
    }

    return (
        <View>
            <FormLabel>{label}</FormLabel>
            <SafeAreaView style={styles.wrapper}>
                <Input
                    style={{ ...styles.input, ...style }}
                    value={value}
                    onChangeText={handleChange}
                    placeholder={placeholder}
                />
            </SafeAreaView>
        </View>
    )
}

export default TextInput