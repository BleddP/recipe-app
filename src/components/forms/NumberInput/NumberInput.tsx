import { View } from "react-native";
import { TextInput as Input } from 'react-native-paper';

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
            <Input
                mode='outlined'
                label={label?.toString() || ''}
                keyboardType="numeric"
                style={{ ...style }}
                value={value.toString()}
                onChangeText={handleChange}
                placeholder={placeholder}
            />
        </View>
    )
}

export default NumberInput