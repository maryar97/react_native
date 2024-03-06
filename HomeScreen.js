import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const goToNextScreen = () => {
    // Naviguer vers l'écran suivant, par exemple, 'DetailsScreen'
    navigation.navigate('Details');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue sur l'écran d'accueil !</Text>
      <Button title="Aller à l'écran suivant" onPress={goToNextScreen} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomeScreen;
