import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Alert } from 'react-native';
import { colors } from '../theme/colors';

const SYMPTOM_OPTIONS = [
  "New lump in breast or underarm",
  "Thickening or swelling",
  "Irritation or dimpling of breast skin",
  "Redness or flaky skin",
  "Pulling in of nipple or pain in nipple area",
  "Nipple discharge other than breast milk"
];

export default function SymptomCheckerScreen() {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [notes, setNotes] = useState('');

  const toggleSymptom = (symptom) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptom));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const handleSubmit = () => {
    if (selectedSymptoms.length > 0) {
      // Mock submit to backend
      Alert.alert(
        "Observation Logged",
        "Your changes have been logged. Based on these symptoms, we strongly recommend scheduling a consultation with your healthcare provider for a professional evaluation.",
        [{ text: "Understood" }]
      );
      setSelectedSymptoms([]);
      setNotes('');
    } else {
      Alert.alert("No Symptoms Selected", "Please select at least one change you've noticed.");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Log an Observation</Text>
        <Text style={styles.subtitle}>
          Have you noticed any of the following recent changes? Select all that apply.
        </Text>

        <View style={styles.optionsContainer}>
          {SYMPTOM_OPTIONS.map((symp, index) => {
            const isSelected = selectedSymptoms.includes(symp);
            return (
              <TouchableOpacity 
                key={index} 
                style={[styles.optionButton, isSelected && styles.optionButtonActive]}
                onPress={() => toggleSymptom(symp)}
              >
                <Text style={[styles.optionText, isSelected && styles.optionTextActive]}>
                  {symp}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <Text style={styles.label}>Additional Notes (Optional)</Text>
        <TextInput
          style={styles.textArea}
          placeholder="Describe how long you've noticed this, pain levels, etc."
          placeholderTextColor={colors.textLight}
          multiline
          numberOfLines={4}
          value={notes}
          onChangeText={setNotes}
        />

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Log to History</Text>
        </TouchableOpacity>

        <View style={styles.warningBox}>
          <Text style={styles.warningText}>
            Medical Disclaimer: Rosette cannot provide a medical diagnosis. If you note any changes, consulting a healthcare professional is paramount.
          </Text>
        </View>
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 10,
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textLight,
    marginBottom: 24,
    lineHeight: 24,
  },
  optionsContainer: {
    marginBottom: 24,
  },
  optionButton: {
    backgroundColor: colors.surface,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  optionButtonActive: {
    backgroundColor: colors.primary + '15',
    borderColor: colors.primary,
  },
  optionText: {
    fontSize: 16,
    color: colors.text,
  },
  optionTextActive: {
    color: colors.primary,
    fontWeight: '600',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 12,
  },
  textArea: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: colors.text,
    minHeight: 120,
    textAlignVertical: 'top',
    marginBottom: 24,
  },
  submitButton: {
    backgroundColor: colors.primary,
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  submitButtonText: {
    color: colors.background,
    fontSize: 18,
    fontWeight: '600',
  },
  warningBox: {
    backgroundColor: '#FFF0F0',
    padding: 16,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: colors.error,
    marginBottom: 20,
  },
  warningText: {
    color: colors.error,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
  }
});
