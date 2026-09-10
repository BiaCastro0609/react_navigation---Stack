import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

export default function Sobre() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.headerBox}>
          <Text style={styles.mainTitle}>Nossa Essência</Text>
          <View style={styles.accentLine} />
        </View>

        {/* CARD 1 - PADRONIZADO */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTag}>DESDE 2024</Text>
            <Text style={styles.cardTitle}>O Grão e a Maré</Text>
          </View>
          <Text style={styles.cardText} numberOfLines={6}>
            O <Text style={styles.highlight}>Palmé Beach Bar</Text> nasceu do desejo de unir o ritual sagrado do café com a liberdade do pé na areia. 
            Não somos apenas uma cafeteria; somos o ponto de encontro entre o aroma do café recém-passado e a brisa salgada do oceano.
          </Text>
        </View>

        {/* SEÇÃO AZUL - ALINHADA E PADRONIZADA */}
        <View style={styles.blueSection}>
          <Text style={styles.quoteText}>
            "Aqui, o tempo não corre. Ele flutua conforme as ondas."
          </Text>
        </View>

        {/* CARD 2 - PADRONIZADO COM O MESMO TAMANHO */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTag}>VALORES</Text>
            <Text style={styles.cardTitle}>Nosso Compromisso</Text>
          </View>
          <Text style={styles.cardText} numberOfLines={4}>
            Trabalhamos exclusivamente com produtores locais e grãos selecionados. Nosso compromisso é com a sustentabilidade e preservação do nosso paraíso.
          </Text>
          
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>100%</Text>
              <Text style={styles.statLabel}>Artesanal</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>Bio</Text>
              <Text style={styles.statLabel}>Eco-Friendly</Text>
            </View>
          </View>
        </View>

        <View style={styles.spacer} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFACD', 
  },
  scrollContent: {
    alignItems: 'center', // Centraliza todos os blocos horizontalmente
    paddingBottom: 30,
  },
  headerBox: {
    padding: 30,
    alignItems: 'center',
    backgroundColor: '#B22222', 
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    width: '100%',
    marginBottom: 25,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: '900',
    color: '#FFFACD',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  accentLine: {
    width: 60,
    height: 4,
    backgroundColor: '#87CEFA', 
    marginTop: 10,
    borderRadius: 2,
  },
  card: {
    width: 320, // LARGURA FIXA
    height: 260, // ALTURA FIXA PADRONIZADA PARA AMBOS OS CARDS
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 20,
    justifyContent: 'space-between', // Distribui o conteúdo internamente
    shadowColor: '#B22222',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 20,
  },
  cardHeader: {
    marginBottom: 5,
  },
  cardTag: {
    fontSize: 10,
    fontWeight: '800',
    color: '#87CEFA',
    letterSpacing: 2,
    marginBottom: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#B22222',
  },
  cardText: {
    fontSize: 13,
    lineHeight: 20,
    color: '#444',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#B22222',
  },
  blueSection: {
    width: 320, // Mantém o mesmo alinhamento dos cards
    backgroundColor: '#87CEFA', 
    padding: 20,
    borderRadius: 20,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quoteText: {
    fontSize: 15,
    fontStyle: 'italic',
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '600',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    paddingTop: 12,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: '900',
    color: '#B22222',
  },
  statLabel: {
    fontSize: 10,
    color: '#87CEFA',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  spacer: {
    height: 20,
  },
});