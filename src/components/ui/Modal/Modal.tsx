import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native';

// Components
import Button from '../Button';
import H1 from '../../typography/H1'

const Modal = () => {
    const navigation = useNavigation()

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <H1>This is a modal!</H1>
            <Button onPress={() => navigation.goBack()} title="Dismiss" />
        </View>
    );
}

export default Modal