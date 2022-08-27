import { View, TextInput as Input } from "react-native";

// Components
import FormLabel from "../../typography/FormLabel";

// Styles
import styles from './styles'

interface Props {
    id: string | number,
    value: number,
    onChange: (id: number | string, newValue: number) => void,
    placeholder?: string,
    label?: number | string,
    style?: object
}

const NumberInput: React.FC<Props> = ({ id, value, onChange, placeholder, label, style }) => {

    const handleChange = (newValue: string) => {
        onChange(id, parseInt(newValue))
    }

    return (
        <View>
            <FormLabel>{label}</FormLabel>
            <View style={styles.wrapper}>
                <Input
                    keyboardType="numeric"
                    style={{ ...styles.input, ...style }}
                    value={value.toString()}
                    onChangeText={handleChange}
                    placeholder={placeholder}
                />
            </View>
        </View>
    )
}

export default NumberInput