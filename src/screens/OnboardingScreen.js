import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Switch } from 'react-native';
import { colors } from '../theme/colors';

export default function OnboardingScreen({ route }) {
  const { setHasCompletedOnboarding } = route.params;
  const [step, setStep] = useState(1);
  const [profile, setProfile] = useState({
    age: '',
    cycleLength: '28',
    familyHistory: false
  });

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else {
      // Complete onboarding
      setHasCompletedOnboarding(true);
    }
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.question}>What is your age?</Text>
            <Text style={styles.hint}>This helps us tailor risk models to your demographic.</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. 28"
              keyboardType="number-pad"
              maxLength={3}
              value={profile.age}
              onChangeText={(t) => setProfile({...profile, age: t})}
            />
          </View>
        );
      case 2:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.question}>What is your average cycle length?</Text>
            <Text style={styles.hint}>Self-exams are most effective when timed with your cycle.</Text>
            <TextInput
              style={styles.input}
              placeholder="28"
              keyboardType="number-pad"
              maxLength={2}
              value={profile.cycleLength}
              onChangeText={(t) => setProfile({...profile, cycleLength: t})}
            />
          </View>
        );
      case 3:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.question}>Do you have a family history of breast cancer?</Text>
            <Text style={styles.hint}>Check taking into account immediate relatives (mother, sister, etc.)</Text>
            <View style={styles.switchRow}>
              <Text style={styles.switchLabel}>{profile.familyHistory ? "Yes" : "No"}</Text>
              <Switch
                trackColor={{ false: "#d3d3d3", true: colors.secondary }}
                thumbColor={profile.familyHistory ? colors.primary : "#f4f3f4"}
                onValueChange={(v) => setProfile({...profile, familyHistory: v})}
                value={profile.familyHistory}
              />
            </View>
          </View>
        );
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.stepIndicator}>Step {step} of 3</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${(step / 3) * 100}%` }]} />
          </View>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent}>
          {renderStep()}
        </ScrollView>

        <View style={styles.footer}>
          {step > 1 && (
            <TouchableOpacity style={styles.backButton} onPress={() => setStep(step - 1)}>
              <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity 
            style={[styles.nextButton, step === 1 && { flex: 1 }]} 
            onPress={handleNext}
          >
            <Text style={styles.nextButtonText}>{step === 3 ? "Complete" : "Continue"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    padding: 24,
  },
  header: {
    marginTop: 20,
    marginBottom: 40,
  },
  stepIndicator: {
    fontSize: 14,
    color: colors.textLight,
    fontWeight: '600',
    marginBottom: 8,
  },
  progressBar: {
    height: 6,
    backgroundColor: colors.surface,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 3,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  stepContainer: {
    width: '100%',
  },
  question: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 12,
  },
  hint: {
    fontSize: 15,
    color: colors.textLight,
    marginBottom: 30,
    lineHeight: 22,
  },
  input: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 12,
    padding: 16,
    fontSize: 20,
    color: colors.text,
    textAlign: 'center',
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.surface,
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  switchLabel: {
    fontSize: 18,
    color: colors.text,
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },
  backButton: {
    padding: 18,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.textLight,
    flex: 0.45,
    alignItems: 'center',
  },
  backButtonText: {
    color: colors.textLight,
    fontSize: 16,
    fontWeight: '600',
  },
  nextButton: {
    backgroundColor: colors.primary,
    padding: 18,
    borderRadius: 12,
    flex: 0.5,
    alignItems: 'center',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  nextButtonText: {
    color: colors.background,
    fontSize: 16,
    fontWeight: '600',
  }
});
