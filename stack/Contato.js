import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Fontisto from '@expo/vector-icons/Fontisto';

export default function ContatoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.listPadding} showsVerticalScrollIndicator={false}>
        
        <View style={styles.header}>
          <Text style={styles.subtitle}>PALMÉ CAFÉ</Text>
          <Text style={styles.title}>Contato</Text>
          <View style={styles.divider} />
        </View>

        {/* CARD PRINCIPAL - PADRONIZADO */}
        <View style={styles.card}>
          <View style={styles.infoContainer}>
            
            <View style={styles.infoGroup}>
              <View style={styles.headerRow}>
                <Text style={styles.productName}>Onde Estamos</Text>
                <View style={styles.orderBadge}>
                  <Text style={styles.orderText}>Visite-nos</Text>
                </View>
              </View>
              <Text style={styles.infoTextPrimary}>Rua José Roberto Sales, Vila do Mar, 150, Barra do Ceará, Fortaleza - CE</Text>
              <Text style={styles.productDesc}>Frente ao mar</Text>
            </View>

            <View style={styles.internalDivider} />

            <View style={styles.infoGroup}>
              <View style={styles.headerRow}>
                <Text style={styles.productName}>Funcionamento</Text>
              </View>
              <Text style={styles.infoTextPrimary}>Domingo a Domingo</Text>
              <Text style={styles.productDesc}>Das 08h às 22h</Text>
            </View>

          </View>
        </View>

        <View style={[styles.header, { paddingTop: 10, paddingBottom: 15 }]}>
          <Text style={styles.subtitle}>CANAIS DIRETOS</Text>
        </View>

        {/* CANAIS DE CONTATO - MESMA LARGURA DOS CARDS */}
        <View style={styles.linkRow}>
          <View style={styles.iconPlaceholder}>
            <Ionicons name="logo-whatsapp" size={24} color="#B22222" />
          </View>
          <View style={styles.linkContent}>
            <Text style={styles.linkLabel}>WhatsApp</Text>
            <Text style={styles.linkValue} numberOfLines={1} adjustsFontSizeToFit>
              (00) 00000-0000
            </Text>
          </View>
        </View>

        <View style={styles.linkRow}>
          <View style={styles.iconPlaceholder}>
            <FontAwesome name="instagram" size={24} color="#B22222" />
          </View>
          <View style={styles.linkContent}>
            <Text style={styles.linkLabel}>Instagram</Text>
            <Text style={styles.linkValue} numberOfLines={1} adjustsFontSizeToFit>
              @palmé_bar&café
            </Text>
          </View>
        </View>

        <View style={styles.linkRow}>
          <View style={styles.iconPlaceholder}>
            <Fontisto name="email" size={22} color="#B22222" />
          </View>
          <View style={styles.linkContent}>
            <Text style={styles.linkLabel}>E-mail</Text>
            <Text style={styles.linkValue} numberOfLines={1} adjustsFontSizeToFit>
              palmébar&café@gmail.com
            </Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFACD', 
  },
  listPadding: {
    alignItems: 'center', // Centraliza todos os elementos horizontalmente
    paddingHorizontal: 15,
    paddingBottom: 50,
  },
  header: {
    paddingVertical: 20,
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
    width: 320, // Largura fixa padronizada com os cards do app
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
  infoContainer: {
    padding: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  infoTextPrimary: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 2,
  },
  productDesc: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
    marginTop: 2,
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
  internalDivider: {
    height: 1,
    backgroundColor: '#EEE',
    marginVertical: 15,
  },
  infoGroup: {
    width: '100%',
  },
  linkRow: {
    width: 320, // Mantém a mesma largura do card principal
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 15,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#B22222',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  iconPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#FFFACD', 
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  linkContent: {
    flex: 1,
  },
  linkLabel: {
    fontSize: 10,
    color: '#87CEFA',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  linkValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginTop: 2,
  },
});