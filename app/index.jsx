import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Text,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

// Dados de exemplo para a lista horizontal de emoções
const emotionsData = [
  { id: '1', emotion: 'Triste', icon: '😢' },
  { id: '2', emotion: 'Feliz', icon: '😊' },
  { id: '3', emotion: 'Raiva', icon: '😡' },
  { id: '4', emotion: 'Ansioso', icon: '😰' },
  { id: '5', emotion: 'Surpreso', icon: '😲' },
];

// Dados de exemplo para a lista horizontal de cartões
const dataHorizontal = [
  { id: '1', title: 'Card 1', image: 'https://via.placeholder.com/150' },
  { id: '2', title: 'Card 2', image: 'https://via.placeholder.com/150' },
  { id: '3', title: 'Card 3', image: 'https://via.placeholder.com/150' },
  { id: '4', title: 'Card 4', image: 'https://via.placeholder.com/150' },
];

// Dados de exemplo para a lista vertical de cartões
const dataVertical = [
  { id: '1', title: 'Vertical Card 1', description: 'Description 1' },
  { id: '2', title: 'Vertical Card 2', description: 'Description 2' },
  { id: '3', title: 'Vertical Card 3', description: 'Description 3' },
  { id: '4', title: 'Vertical Card 4', description: 'Description 4' },
];

export default function Example() {
  const renderEmotionItem = ({ item }) => (
    <View style={styles.emotionItem}>
      <Text style={styles.emotionIcon}>{item.icon}</Text>
      <Text style={styles.emotionText}>{item.emotion}</Text>
    </View>
  );

  const renderHorizontalItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      
    </View>
  );

  const renderVerticalItem = ({ item }) => (
    <View style={styles.verticalCard}>
      <Text style={styles.verticalCardTitle}>{item.title}</Text>
      <Text style={styles.verticalCardDescription}>{item.description}</Text>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}>
            <Image
              alt=""
              source={{
                uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
              }}
              style={styles.avatar}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}>
            <FeatherIcon color="#1a2525" name="bell" size={24} />
          </TouchableOpacity>
        </View>

        <View style={styles.userInfo}>
          <Text style={styles.userName}>Olá, Usuário!</Text>
          <Text style={styles.question}>Como você está se sentindo hoje?</Text>
        </View>

        <FlatList
          data={emotionsData}
          renderItem={renderEmotionItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.emotionsList}
        />

        <FlatList
          data={dataHorizontal}
          renderItem={renderHorizontalItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
        />

        <FlatList
          data={dataVertical}
          renderItem={renderVerticalItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.verticalList}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 9999,
  },
  userInfo: {
    marginTop: 20,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  question: {
    fontSize: 16,
    marginTop: 5,
  },
  emotionsList: {
    marginTop: 20,
    paddingVertical: 10,
  },
  emotionItem: {
    alignItems: 'center',
    marginRight: 20,
    width: 60,
  },
  emotionIcon: {
    fontSize: 40,
  },
  emotionText: {
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
  },
  horizontalList: {
    marginTop: 24,
    paddingVertical: 10,
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
    alignItems: 'center',
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  cardTitle: {
    marginTop: 10,
    fontSize: 16,
  },
  verticalList: {
    marginTop: 24,
    paddingBottom: 10,
  },
  verticalCard: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 8,
    marginBottom: 10,
  },
  verticalCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  verticalCardDescription: {
    marginTop: 5,
    fontSize: 14,
    color: '#666',
  },
});
