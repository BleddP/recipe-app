import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { View } from 'react-native'

// Typography
import Span from '../../../typography/Span'

// Components
import Button from '../../Button'
import TextInput from '../../../forms/TextInput/TextInput'

// Styles
import styles from './styles'

interface Props {
    item?: any,
    onAdd: (item: any) => void,
    onRemove: (id: any) => void,
    onUpdate: (item: any) => void,
}

const Ingredient = ({ item = null, onAdd, onRemove, onUpdate }) => {

    // State
    const [edit, setEdit] = useState(true)
    const [input, setInput] = useState({
        name: '',
        amount: "0",
        unit: 'g',
        calories: "0",
        id: ''
    })

    // Reactive
    useEffect(() => {
        item && setInput(item)
        item && setEdit(false)
    }, [item, setInput])

    // Methods
    const handleInputChange = (id: string | number, newValue: string | number) => {
        setInput((prev) => ({
            ...prev,
            [id]: newValue
        }))
    }

    const addItem = () => {
        input.id = uuidv4()
        onAdd(input)
    }

    const removeItem = () => {
        onRemove(item.id)
    }

    const updateItem = () => {
        onUpdate(item)
    }

    return (
        <View>
            {!edit && (
                <View style={styles.row}>
                    <Span>{input.name}</Span>
                    <Span>{input.amount}</Span>
                    <Span>{input.unit}</Span>
                    <Span>{input.calories}cal</Span>
                </View>
            )}
            {edit && (
                <View style={styles.row}>
                    <TextInput label="Name" id="name" value={input.name} onChange={handleInputChange} placeholder="Name" />
                    <TextInput label="Amount" id="amount" value={input.amount} onChange={handleInputChange} />
                    <TextInput id="unit" value={input.unit} onChange={handleInputChange} placeholder="Unit" />
                    <TextInput label="cal / unit" id="calories" value={input.calories} onChange={handleInputChange} />
                </View>
            )
            }
            {!item && edit && <Button title='Add ingredient' onPress={addItem} />}
            {item && edit && <Button title='Update ingredient' onPress={updateItem} />}
        </View>
    )
}

export default Ingredient