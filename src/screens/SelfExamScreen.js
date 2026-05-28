import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, SafeAreaView, ScrollView } from 'react-native';
import { colors } from '../theme/colors';

const EXAM_STEPS = [
  {
    title: "1. Visual Inspection",
    description: "Stand in front of a mirror with your hands on your hips. Look for any changes in size, shape, color, or contour. Look for dimpling, puckering, or bulging of the skin."
  },
  {
    title: "2. Arms Raised",
    description: "Raise your arms high overhead and look for the same changes. Check for any fluid coming out of one or both nipples."
  },
  {
    title: "3. Lying Down",
    description: "Lie down and use your right hand to feel your left breast, and your left hand to feel your right breast. Use a firm, smooth touch with the first few fingers of your hand, keeping the fingers flat and together. Use a circular motion, about the size of a quarter."
  },
  {
    title: "4. Standing Check",
    description: "Finally, feel your breasts while you are standing or sitting. Many women find that the easiest way to feel their breasts is when their skin is wet and slippery, so they like to do this step in the shower."
  }
];

export default function SelfExamScreen() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < EXAM_STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Self-Examination</Text>
        
        <View style={styles.progressContainer}>
          {EXAM_STEPS.map((_, index) => (
            <View 
              key={index} 
              style={[
                styles.progressDot, 
                index <= currentStep ? styles.progressDotActive : null
              ]} 
            />
          ))}
        </View>

        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.stepCard}>
            <Text style={styles.stepTitle}>{EXAM_STEPS[currentStep].title}</Text>
            <Text style={styles.stepDescription}>{EXAM_STEPS[currentStep].description}</Text>
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <Pressable 
            style={({ pressed, hovered }) => [
              styles.button,
              styles.backButton,
              currentStep === 0 && { opacity: 0 },
              (pressed || hovered) && { borderColor: colors.primaryDark }
            ]} 
            onPress={handleBack}
            disabled={currentStep === 0}
          >
            {({ pressed, hovered }) => (
              <Text style={[styles.backButtonText, (pressed || hovered) && { color: colors.primaryDark }]}>Previous</Text>
            )}
          </Pressable>
          
          <Pressable 
            style={({ pressed, hovered }) => [
              styles.button,
              styles.nextButton,
              (pressed || hovered) && { backgroundColor: colors.primaryDark }
            ]} 
            onPress={handleNext}
          >
            <Text style={styles.nextButtonText}>
              {currentStep === EXAM_STEPS.length - 1 ? "Finish Check" : "Next Step"}
            </Text>
          </Pressable>
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
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 20,
    marginTop: 10,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,
  },
  progressDot: {
    width: 60,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#EEEEEE',
    marginHorizontal: 4,
  },
  progressDotActive: {
    backgroundColor: colors.primary,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  stepCard: {
    backgroundColor: colors.surface,
    padding: 30,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  stepTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 20,
  },
  stepDescription: {
    fontSize: 18,
    color: colors.textLight,
    lineHeight: 28,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    flex: 0.45,
  },
  backButtonText: {
    color: colors.textLight,
    fontSize: 16,
    fontWeight: '600',
  },
  nextButton: {
    backgroundColor: colors.primary,
    flex: 0.5,
  },
  nextButtonText: {
    color: colors.background,
    fontSize: 16,
    fontWeight: '600',
  }
});
