import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

// Components
import Container from '../../components/layout/Container';
import Button from '../../components/ui/Button';
import { Ingredient, Instructions } from '../../components/ui/Recipe';

// Typography
import H1 from '../../components/typography/H1';

const NewDish = () => {
    const navigation = useNavigation()

    // State
    const [name, setName] = useState('')
    const [ingredients, setIngredients] = useState([])
    const [instructions, setInstructions] = useState('')

    const onAdd = (item: any) => {
        const newArray = [...ingredients, item]
        setIngredients(newArray)
    }

    const onRemove = (id: number | string) => {
        setIngredients(ingredients.filter((item) => item.id !== id))
    }

    const onUpdate = (item: any) => {
        console.log(item)
    }

    return (
        <Container style={{ flex: 1 }}>
            <H1>{name || 'New dish'}</H1>
            {ingredients.map((item, i) => {
                return <Ingredient key={i} item={item} onAdd={onAdd} onRemove={onRemove} onUpdate={onUpdate} />
            })}
            <Ingredient onAdd={onAdd} onUpdate={onUpdate} onRemove={onRemove} />
            <Instructions />
            <Button onPress={() => navigation.goBack()} title="Dismiss" />
        </Container>
    );
}

export default NewDish