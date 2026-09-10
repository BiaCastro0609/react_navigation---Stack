import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';
import Comidas from './Comidas';
import Contato from './Contato';
import Produto from './Produto';
import Sobre from './Sobre';

const Stack = createNativeStackNavigator();

function stackNavigator(){
  return(
    <Stack.Navigator initialRouteName = "Home">
      <Stack.Screen name = "HomeScreen" component={HomeScreen} />
      <Stack.Screen name = "Comidas" component={Comidas} />
      <Stack.Screen name = "Contato" component={Contato} />
      <Stack.Screen name = "Produto" component={Produto} />
      <Stack.Screen name = "Sobre" component={Sobre} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#87CEFA',
          },
          headerTintColor: '#FDFCF0',
          headerTitleStyle: {
            fontWeight: '900',
            letterSpacing: 2,
          },
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Sobre"
          component={Sobre}
          options={{ title: 'Sobre' }}
        />
        <Stack.Screen
          name="Comidas"
          component={Comidas}
          options={{ title: 'Comidas' }}
        />
        <Stack.Screen
          name="Produto"
          component={Produto}
          options={{ title: 'Produto' }}
        />
        <Stack.Screen
          name="Contato"
          component={Contato}
          options={{ title: 'Contato' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
