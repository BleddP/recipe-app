import { useNavigation } from '@react-navigation/native';
import { View } from "react-native"

// Store
import { useSelector } from 'react-redux'

// Components
import Header from "../../components/layout/Header"
import Container from "../../components/layout/Container"
import Button from '../../components//ui/Button'
import Card from '../../components/ui/Card';

// Typography
import H1 from "../../components/typography/H1"

// Interfaces
import { Dish } from '../../interfaces';

const HomeScreen = () => {
    const navigation = useNavigation<any>()
    const dishes = useSelector((state: any) => state.dishes)

    const openModal = () => {
        navigation.navigate("NewDish")
    }

    return (
        <View>
            <Header title="I am the header" />
            <Container>
                <H1>Bon appetit</H1>
                <Button title='Add new dish' onPress={openModal} />
                {dishes.map((dish: Dish) => {
                    return (
                        <View key={dish.id}>
                            <H1>{dish.name}</H1>
                        </View>
                    )
                })}
            </Container>
        </View>
    )
}

export default HomeScreen