import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BureauScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Bureau Amiens Boxing Club</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Présidente</Text>
        <Text style={styles.cardText}>Vnessa FOUACHE</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Secrétaire</Text>
        <Text style={styles.cardText}>Sabine FOUACHE</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Vice-Président</Text>
        <Text style={styles.cardText}>Vincent DUFFRENOY</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Trésorier</Text>
        <Text style={styles.cardText}>Thomas HAMIDI</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Membre</Text>
        <Text style={styles.cardText}>Steffy FOUACHE</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Membre</Text>
        <Text style={styles.cardText}>Lucien DUPONT</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Cadre Technique</Text>
        <Text style={styles.cardText}>Jérôme FOUACHE</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    backgroundColor: 'lightgray',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 16,
  },
});

export default BureauScreen;
