import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent} 
        showsVerticalScrollIndicator={false}
      >
        
        {/* Área do Logo */}
        <View style={styles.logoArea}>
          <Text style={styles.title}>PALMÉ</Text>
          <View style={styles.stripeContainer}>
            <View style={[styles.stripe, { backgroundColor: '#87CEFA' }]} />
            <Text style={styles.subtitle}>BEACH BAR & CAFÉ</Text>
            <View style={[styles.stripe, { backgroundColor: '#B22222' }]} />
          </View>
        </View>

        {/* Lista de Botões */}
        <View style={styles.buttonList}>
          
          <TouchableOpacity 
            style={[styles.btn, { borderLeftColor: '#B22222' }]} 
            onPress={() => navigation.navigate('Sobre')}
          >
            <Text style={styles.btnText}>SOBRE</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.btn, { borderLeftColor: '#87CEFA' }]} 
            onPress={() => navigation.navigate('Produto')}
          >
            <Text style={styles.btnText}>PRODUTO</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.btn, { borderLeftColor: '#B22222' }]} 
            onPress={() => navigation.navigate('Comidas')}
          >
            <Text style={styles.btnText}>COMIDAS</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.btn, { borderLeftColor: '#87CEFA' }]} 
            onPress={() => navigation.navigate('Contato')}
          >
            <Text style={styles.btnText}>CONTATO</Text>
          </TouchableOpacity>

        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFACD', 
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  logoArea: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 48,
    fontWeight: '900',
    color: '#4B2C20', 
    letterSpacing: 4,
  },
  stripeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 5,
  },
  stripe: {
    height: 2,
    width: 30,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#4B2C20',
    letterSpacing: 2,
  },
  buttonList: {
    width: '100%',
    maxWidth: 400, // Evita que os botões fiquem excessivamente largos em tablets/web
    gap: 15,
  },
  btn: {
    backgroundColor: '#FFF', 
    height: 52,
    justifyContent: 'center',
    paddingLeft: 20,
    borderRadius: 8,
    borderLeftWidth: 5,
    shadowColor: '#4B2C20',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  btnText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#4B2C20',
    letterSpacing: 1,
  },
});