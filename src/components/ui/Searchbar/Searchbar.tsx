import { useState } from 'react'
import { View, TextInput } from 'react-native'

// Icons
import { FontAwesome } from '@expo/vector-icons';

// Styles
import styles from './styles'

const Searchbar = () => {
    const [input, setInput] = useState('')

    return (
        <View style={styles.container}>
            <View style={styles.searchbar}>
                <TextInput value={input} onChangeText={setInput} style={styles.input} placeholder="Start searching" />
                <FontAwesome name="search" size={18} color="black" />
            </View>
        </View>
    )
}

export default Searchbar