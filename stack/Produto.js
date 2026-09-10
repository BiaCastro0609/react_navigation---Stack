import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, SafeAreaView } from 'react-native';

const PRODUTOS = [
  {
    id: '1',
    nome: 'Expresso Palmé',
    descricao: 'Grãos selecionados com notas de chocolate e caramelo.',
    preco: 'R$ 9,50',
    imagem: 'https://i.pinimg.com/1200x/c3/f4/ec/c3f4ecfd00267352b873438995008ba2.jpg', 
  },
  {
    id: '2',
    nome: 'Iced Latte Sky',
    descricao: 'Café gelado batido com essência de baunilha e leite cremoso.',
    preco: 'R$ 16,00',
    imagem: 'https://i.pinimg.com/1200x/f3/bc/e4/f3bce49049ddbe09de3377999ddb0951.jpg',
  },
  {
    id: '3',
    nome: 'Coco White',
    descricao: 'Espresso curto com leite de coco vaporizado super cremoso.',
    preco: 'R$ 15,90',
    imagem: 'https://i.pinimg.com/1200x/4e/93/8b/4e938b80faa20c0a246eccf845cb02f0.jpg',
  },
  {
    id: '4',
    nome: 'Pink Lemonade',
    descricao: 'Refresco de limão siciliano com framboesas frescas.',
    preco: 'R$ 14,00',
    imagem: 'https://i.pinimg.com/736x/f9/6b/0d/f96b0d8033408f9a488cc3e07a8e8c62.jpg',
  },
];

export default function Produto() {
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
        data={PRODUTOS}
        keyExtractor={item => item.id}
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
    alignItems: 'center', // Centraliza os cards horizontalmente na tela
    paddingHorizontal: 15,
    paddingBottom: 30,
  },
  header: {
    paddingVertical: 25,
    alignItems: 'center',
    width: '100%',
  },
  subtitle: {
    fontSize: 10,
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
    width: 320, // Largura fixa padronizada
    height: 360, // Altura fixa padronizada
    backgroundColor: '#FFF',
    borderRadius: 20,
    marginBottom: 20,
    overflow: 'hidden', 
    elevation: 5,
    shadowColor: '#B22222',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  productImage: {
    width: '100%',
    height: 170, // Altura padrão da imagem
    backgroundColor: '#EEE', 
  },
  infoContainer: {
    flex: 1, // Ocupa todo o espaço restante do card
    padding: 15,
    justifyContent: 'space-between', // Garante que o selo vá para o rodapé do card
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
    flex: 1,
    marginRight: 10,
  },
  priceTag: {
    backgroundColor: '#FFFACD',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FFFACD',
  },
  priceText: {
    color: '#B22222',
    fontWeight: 'bold',
    fontSize: 14,
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
    paddingVertical: 3,
    borderRadius: 5,
  },
  orderText: {
    fontSize: 10,
    color: '#FFF',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});