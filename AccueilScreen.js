import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const AccueilScreen = ({ navigation }) => {
  const navigateToBureau = () => {
    // Naviguer vers l'écran "Bureau"
    // Vous devez implémenter la navigation selon votre configuration
    navigation.navigate('Bureau');
  };

  const navigateToHoraire = () => {
    // Naviguer vers l'écran "Horaire"
    // Vous devez implémenter la navigation selon votre configuration
    navigation.navigate('Horaire');
  };

  const navigateToFormeDeBoxe = () => {
    // Naviguer vers l'écran "FormeDeBoxe"
    // Vous devez implémenter la navigation selon votre configuration
    navigation.navigate('FormeDeBoxe');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text>Présentation du bureau</Text>
        <TouchableOpacity onPress={navigateToBureau} style={styles.button}>
          <Text style={styles.buttonText}>Bureau</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text>Informations sur les heures d'ouverture</Text>
        <TouchableOpacity onPress={navigateToHoraire} style={styles.button}>
          <Text style={styles.buttonText}>Horaire/Tarif</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text>Présentation des activités proposées</Text>
        <TouchableOpacity onPress={navigateToFormeDeBoxe} style={styles.button}>
          <Text style={styles.buttonText}>Forme de boxe</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: 150,
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
  button: {
    marginTop: 10,
    backgroundColor: 'lightgray',
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
  },
});

export default AccueilScreen;
