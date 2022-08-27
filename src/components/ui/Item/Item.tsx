import { TouchableOpacity, Image, View } from "react-native"
import { useNavigation } from '@react-navigation/native';

// Typography
import { H4 } from "../../typography"

// Styles
import styles from "./styles"

const Item = ({ item }) => {

    const navigation = useNavigation()

    const viewItem = () => {
        console.log('view item')
        // navigation.navigate("Product")
    }

    return (
        <TouchableOpacity onPress={viewItem}>
            <View style={styles.item}>
                <Image style={styles.image} source={require('../../../assets/backgrounds/rainbow.png')} />
                <View style={styles.info}>
                    <H4 style={styles.title}>NT$ 238</H4>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Item