import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AccueilScreen from './AccueilScreen'; // Assurez-vous que le chemin est correct
import BureauScreen from './BureauScreen'; // Assurez-vous que le chemin est correct
import HoraireScreen from './HoraireScreen'; // Assurez-vous que le chemin est correct


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Accueil">
        <Stack.Screen name="Accueil" component={AccueilScreen} />
        <Stack.Screen name="Bureau" component={BureauScreen} />
        <Stack.Screen name="Horaire" component={HoraireScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
