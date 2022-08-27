import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { View } from 'react-native'

// Typography
import Span from '../../../typography/Span'

// Components
import Button from '../../Button'
import TextInput from '../../../forms/TextInput'
import NumberInput from '../../../forms/NumberInput'

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
    const defaultValues = {
        name: '',
        amount: 0,
        unit: 'g',
        calories: 0,
        id: ''
    }
    const [edit, setEdit] = useState(true)
    const [input, setInput] = useState(defaultValues)

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
        setInput(defaultValues)
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
                    <Span style={styles.name}>{input.name}</Span>
                    <Span style={styles.amount}>{input.amount}</Span>
                    <Span style={styles.unit}>{input.unit}</Span>
                    <Span style={styles.cal}>{input.calories}cal</Span>
                </View>
            )}
            {edit && (
                <View style={styles.row}>
                    <TextInput style={styles.name} label="Name" id="name" value={input.name} onChange={handleInputChange} placeholder="Name" />
                    <NumberInput style={styles.amount} label="Amount" id="amount" value={input.amount} onChange={handleInputChange} />
                    <TextInput style={styles.unit} id="unit" value={input.unit} onChange={handleInputChange} placeholder="Unit" />
                    <NumberInput style={styles.cal} label="cal / unit" id="calories" value={input.calories} onChange={handleInputChange} />
                </View>
            )
            }
            {!item && edit && <Button title='Add ingredient' onPress={addItem} />}
            {item && edit && <Button title='Update ingredient' onPress={updateItem} />}
        </View>
    )
}

export default Ingredient