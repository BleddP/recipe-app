import * as React from 'react';
import 'react-native-get-random-values'

// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import HomeScreen from './src/screens/Home';

// Modals
import NewDish from './src/modals/NewDish';


// Components
import Toaster from './src/components/ui/Toaster';

// Store
import { Provider } from 'react-redux'
import store from './src/store'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Group screenOptions={{ presentation: 'modal' }}>
            <Stack.Screen name="NewDish" component={NewDish} options={{ title: 'Add a new dish' }} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
      <Toaster />
    </Provider>
  );
}

export default App;