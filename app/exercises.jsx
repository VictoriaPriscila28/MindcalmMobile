import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity  } from 'react-native';

const ExerciseScreen = () => (
    <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.sectionTitle}>Notícias sobre Saúde Mental</Text>
        <View style={styles.newsContainer}>
            {/* Notícias sobre saúde mental */}
            <View style={styles.newsCard}>
                <Image
                    source={{ uri: 'https://via.placeholder.com/150' }} // Substitua pelo URL da imagem da notícia
                    style={styles.newsImage} />
                <Text style={styles.newsTitle}>Título da Notícia</Text>
                <Text style={styles.newsDescription}>Descrição da Notícia</Text>
            </View>
            {<View style={styles.newsCard}>
                <Image
                    source={{ uri: 'https://via.placeholder.com/150' }} // Substitua pelo URL da imagem da notícia
                    style={styles.newsImage} />
                <Text style={styles.newsTitle}>Título da Notícia</Text>
                <Text style={styles.newsDescription}>Descrição da Notícia</Text>
            </View>}
            <View style={styles.newsCard}>
                <Image
                    source={{ uri: 'https://via.placeholder.com/150' }} // Substitua pelo URL da imagem da notícia
                    style={styles.newsImage} />
                <Text style={styles.newsTitle}>Título da Notícia</Text>
                <Text style={styles.newsDescription}>Descrição da Notícia</Text>
            </View>
        </View>

        <Text style={styles.sectionTitle}>Exercícios de Respiração</Text>
                  

    </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  newsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  newsCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    marginRight: 10,
    elevation: 3,
  },
  newsImage: {
    width: '100%',
    height: 150,
    marginBottom: 10,
    borderRadius: 8,
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  newsDescription: {
    fontSize: 14,
    color: '#555555',
  },
  exerciseContainer: {
    marginBottom: 20,
  },
});

export default ExerciseScreen;
