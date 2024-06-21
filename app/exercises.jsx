import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

const ExerciseScreen = () => (
  <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.sectionTitle}>Notícias sobre Saúde Mental</Text>
    <View style={styles.newsContainer}>
      {/* Notícias sobre saúde mental */}
      <View style={styles.newsCard}>
        <Image
          source={{ uri: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/04/sono-saude-getty.jpg?w=1220&h=674&crop=1' }} // Substitua pelo URL da imagem da notícia
          style={styles.newsImage} />
        <Text style={styles.newsTitle}>6 tipos diferentes de depressão são descobertos em novo estudo</Text>
        <Text style={styles.newsDescription}>Pesquisadores acreditam que os achados poderão ajudar a alcançar maior precisão no tratamento da doença

</Text>
      </View>
      <View style={styles.newsCard}>
        <Image
          source={{ uri: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/06/redes-sociais.jpg?w=1220&h=674&crop=1' }} // Substitua pelo URL da imagem da notícia
          style={styles.newsImage} />
        <Text style={styles.newsTitle}>Brasileiros que passam mais tempo nas redes sociais são os que têm ansiedade</Text>
        <Text style={styles.newsDescription}>Descoberta é de relatório que avalia e acompanha a saúde mental da população brasileira</Text>
      </View>
      <View style={styles.newsCard}>
        <Image
          source={{ uri: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/01/maos-ansiedade.webp?w=350&h=195&crop=1' }} // Substitua pelo URL da imagem da notícia
          style={styles.newsImage} />
        <Text style={styles.newsTitle}>68% dos brasileiros sentem-se ansiosos e menos da metade busca ajuda, diz pesquisa</Text>
        <Text style={styles.newsDescription}>Cerca de um quarto da população recebeu diagnóstico de transtorno de ansiedade</Text>
      </View>
    </View>
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
    flexDirection: 'column',
    marginBottom: 20,
  },
  newsCard: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
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
});

export default ExerciseScreen;
