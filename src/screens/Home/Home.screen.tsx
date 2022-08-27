import { useNavigation } from '@react-navigation/native';
import { View } from "react-native"

// Components
import Header from "../../components/layout/Header"
import Container from "../../components/layout/Container"
import Button from '../../components//ui/Button'
import H1 from "../../components/typography/H1"

const HomeScreen = () => {
    const navigation = useNavigation<any>()

    const openModal = () => {
        navigation.navigate("NewDish")
    }

    return (
        <View>
            <Header title="I am the header" />
            <Container>
                <H1>Home screen</H1>
                <Button title='Add new dish' onPress={openModal} />
            </Container>
        </View>
    )
}

export default HomeScreen