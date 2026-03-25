import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../theme/colors';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Hello, Sarah 🌸</Text>
          <View style={styles.riskBadge}>
            <Text style={styles.riskBadgeText}>Low Risk</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardHeader}>Next Reminder</Text>
          <Text style={styles.cardTitle}>Self-Exam due in 3 days</Text>
          <Text style={styles.cardText}>Regular checks are your best defense.</Text>
          <TouchableOpacity 
            style={styles.primaryButton}
            onPress={() => navigation.navigate('Self Exam')}
          >
            <Text style={styles.primaryButtonText}>Start Check Now</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.card, styles.tipCard]}>
          <Text style={styles.cardHeader}>Daily Tip</Text>
          <Text style={styles.cardText}>
            Did you know? Knowing what is normal for you is the first step in recognizing changes. Familiarize yourself with how your breasts normally look and feel.
          </Text>
        </View>
        
        <View style={styles.actionRow}>
          <TouchableOpacity 
            style={styles.secondaryButton}
            onPress={() => navigation.navigate('Symptoms')}
          >
            <Text style={styles.secondaryButtonText}>Log Symptoms</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.disclaimer}>
          The information provided is for educational purposes only and does not substitute professional medical advice.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    padding: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 20,
  },
  greeting: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
  },
  riskBadge: {
    backgroundColor: colors.success,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  riskBadgeText: {
    color: colors.background,
    fontSize: 12,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 24,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  tipCard: {
    backgroundColor: colors.secondary + '20', // Very light pink
    borderWidth: 1,
    borderColor: colors.secondary,
  },
  cardHeader: {
    fontSize: 14,
    color: colors.textLight,
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
  },
  cardText: {
    fontSize: 16,
    color: colors.text,
    lineHeight: 24,
    marginBottom: 20,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: colors.background,
    fontSize: 16,
    fontWeight: '600',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '500',
  },
  disclaimer: {
    fontSize: 12,
    color: colors.textLight,
    textAlign: 'center',
    lineHeight: 18,
    marginTop: 10,
  }
});
