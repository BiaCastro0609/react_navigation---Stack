import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, SafeAreaView } from 'react-native';

const COMIDA = [
  {
    id: '1',
    nome: 'Salmon Wave',
    descricao: 'Pão levain, sour cream, salmão curado e brotos de rúcula.',
    preco: 'R$ 34,00',
    imagem: 'https://i.pinimg.com/736x/43/76/35/4376354e5e0ea2faf88597d30ddcdeb5.jpg',
  },
  {
    id: '2',
    nome: 'Brie Panini',
    descricao: 'Ciabatta prensada com peito de peru, queijo brie e manjericão.',
    preco: 'R$ 25,00',
    imagem: 'https://i1-c.pinimg.com/1200x/6f/9a/97/6f9a971904b8dc95c2c8913c18298372.jpg',
  },
  {
    id: '3',
    nome: 'Toast Tropical',
    descricao: 'Pão de fermentação natural, abacate e ovo pochê.',
    preco: 'R$ 27,00',
    imagem: 'https://i.pinimg.com/736x/ab/73/58/ab735889a9c27342996c5d57dbb2123d.jpg',
  },
  {
    id: '4',
    nome: 'Coast Croissant',
    descricao: 'Croissant folhado recheado com frango desfiado cremoso e folhas finas.',
    preco: 'R$ 22,00',
    imagem: 'https://i.pinimg.com/736x/a9/48/8f/a9488f3e3c5f2e8e7059b768e18f747a.jpg',
  },
  {
    id: '5',
    nome: 'Green Quiche',
    descricao: 'Quiche leve de alho-poró com queijo gruyère e uma crosta super crocante.',
    preco: 'R$ 18,50',
    imagem: 'https://i.pinimg.com/736x/18/fc/2e/18fc2ed35864766f45fb3923062072d6.jpg',
  },
  {
    id: '6',
    nome: 'Berry Waffle',
    descricao: 'Waffle belga quentinho com mix de frutas vermelhas e mel.',
    preco: 'R$ 21,00',
    imagem: 'https://i.pinimg.com/736x/8f/9e/4c/8f9e4c7920d038447b69f94484382d0e.jpg',
  },
  {
    id: '7',
    nome: 'Lemon Tart',
    descricao: 'Torta de limão com base crocante e merengue tostado.',
    preco: 'R$ 16,00',
    imagem: 'https://i1-c.pinimg.com/736x/9a/77/8c/9a778c370c083af8b0b662a9b615c991.jpg',
  },
  {
    id: '8',
    nome: 'Banoffee Beach',
    descricao: 'Camada de biscoito de canela, doce de leite, banana fresca e chantilly.',
    preco: 'R$ 16,50',
    imagem: 'https://i1-c.pinimg.com/1200x/31/88/2a/31882a874539bc4c8701c4ff4d249fe0.jpg',
  },
  {
    id: '9',
    nome: 'Pistachio Cheesecake',
    descricao: 'Cheesecake de pistache com base crocante de biscoito e calda de chocolate.',
    preco: 'R$ 24,00',
    imagem: 'https://i1-c.pinimg.com/736x/32/3f/85/323f85674b8048477d99190c28e2b490.jpg',
  },
  {
    id: '10',
    nome: 'Palmé Cake',
    descricao: 'Bolo úmido de especiarias e café, com cobertura cremosa de cream cheese e nozes.',
    preco: 'R$ 18,00',
    imagem: 'https://i1-c.pinimg.com/736x/2c/3a/4e/2c3a4e97708e30c22adffab1e3f0d031.jpg',
  },
];

export default function Comidas() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imagem }} style={styles.productImage} />

      <View style={styles.infoContainer}>
        <View style={styles.topContent}>
          <View style={styles.headerRow}>
            <Text style={styles.productName} numberOfLines={1}>
              {item.nome}
            </Text>
            <View style={styles.priceTag}>
              <Text style={styles.priceText}>{item.preco}</Text>
            </View>
          </View>

          <Text style={styles.productDesc} numberOfLines={3}>
            {item.descricao}
          </Text>
        </View>

        <View style={styles.orderBadge}>
          <Text style={styles.orderText}>Favorito da Casa</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={COMIDA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listPadding}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.subtitle}>SABORES DO PARAÍSO</Text>
            <Text style={styles.title}>Cardápio Selecionado</Text>
            <View style={styles.divider} />
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFACD',
  },
  listPadding: {
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingBottom: 30,
  },
  header: {
    paddingVertical: 25,
    alignItems: 'center',
    width: '100%',
  },
  subtitle: {
    fontSize: 11,
    letterSpacing: 3,
    color: '#87CEFA',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 26,
    fontWeight: '900',
    color: '#B22222',
    marginTop: 5,
  },
  divider: {
    width: 40,
    height: 3,
    backgroundColor: '#B22222',
    marginTop: 10,
    borderRadius: 2,
  },
  card: {
    width: 320,
    height: 360,
    backgroundColor: '#FFF',
    borderRadius: 20,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#B22222',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  productImage: {
    width: '100%',
    height: 170,
    backgroundColor: '#EEE',
  },
  infoContainer: {
    flex: 1,
    padding: 15,
    justifyContent: 'space-between',
  },
  topContent: {
    gap: 8,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#2C3E50',
    flex: 1,
    marginRight: 8,
  },
  priceTag: {
    backgroundColor: '#FFFACD',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  priceText: {
    color: '#B22222',
    fontWeight: 'bold',
    fontSize: 13,
  },
  productDesc: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
  },
  orderBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#87CEFA',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
  },
  orderText: {
    fontSize: 10,
    color: '#FFF',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});