import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const HoraireScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.carouselItem}>
          <Text style={styles.title}>BOXE EDUCATIVE</Text>
          <Text style={styles.subtitle}>BOXE LOISIR</Text>
          <Text style={styles.time}>DU LUNDI AU VENDREDI DE 18H À 19H30</Text>
          <Text style={styles.time}>MERCREDI 16H/18H SAMEDI 10H/12H</Text>
          <Text style={styles.price}>Tarif: 150€</Text>
        </View>

        <View style={styles.carouselItem}>
          <Text style={styles.title}>BOXE Amateur</Text>
          <Text style={styles.time}>DU LUNDI AU VENDREDI DE 19H30 À 21H00</Text>
          <Text style={styles.price}>Tarif: 150€</Text>
        </View>

        {/* Ajoutez les autres items du carrousel de la même manière */}

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  carouselItem: {
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 16,
  },
  price: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 8,
  },
  image: {
    width: 700,
    height: 400, // Ajustez la hauteur en fonction de vos besoins
    resizeMode: 'contain',
  },
});

export default HoraireScreen;
