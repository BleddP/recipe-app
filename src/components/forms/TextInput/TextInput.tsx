import { SafeAreaView, View } from "react-native";
import { TextInput as Input } from 'react-native-paper';

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
            <SafeAreaView>
                <Input
                    mode='outlined'
                    label={label?.toString() || ''}
                    style={{ ...style }}
                    value={value}
                    onChangeText={handleChange}
                />
            </SafeAreaView>
        </View>
    )
}

export default TextInput