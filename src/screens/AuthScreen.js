import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
import { colors } from '../theme/colors';

export default function AuthScreen({ route }) {
  const { setIsAuthenticated } = route.params;
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [codeSent, setCodeSent] = useState(false);

  const handleSendCode = () => {
    if (phoneNumber.length > 9) {
      setCodeSent(true);
      // Mock code send
    }
  };

  const handleVerifyCode = () => {
    if (verificationCode.length >= 4) {
      setIsAuthenticated(true);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Rosette</Text>
          <Text style={styles.subtitle}>Your companion for proactive breast health</Text>
        </View>

        <View style={styles.formContainer}>
          {!codeSent ? (
            <>
              <Text style={styles.label}>Enter your phone number</Text>
              <TextInput
                style={styles.input}
                placeholder="+1 234 567 8900"
                placeholderTextColor={colors.textLight}
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
              <Pressable 
                style={({ pressed, hovered }) => [
                  styles.button,
                  (pressed || hovered) && { backgroundColor: colors.primaryDark }
                ]} 
                onPress={handleSendCode}
              >
                <Text style={styles.buttonText}>Continue</Text>
              </Pressable>
            </>
          ) : (
            <>
              <Text style={styles.label}>Enter the 4-digit code sent to {phoneNumber}</Text>
              <TextInput
                style={styles.input}
                placeholder="0000"
                placeholderTextColor={colors.textLight}
                keyboardType="number-pad"
                maxLength={6}
                value={verificationCode}
                onChangeText={setVerificationCode}
              />
              <Pressable 
                style={({ pressed, hovered }) => [
                  styles.button,
                  (pressed || hovered) && { backgroundColor: colors.primaryDark }
                ]} 
                onPress={handleVerifyCode}
              >
                <Text style={styles.buttonText}>Verify & Log In</Text>
              </Pressable>
              <Pressable 
                style={styles.textButton} 
                onPress={() => setCodeSent(false)}
              >
                {({ pressed, hovered }) => (
                  <Text style={[styles.textButtonText, (pressed || hovered) && { color: colors.primaryDark }]}>
                    Change Phone Number
                  </Text>
                )}
              </Pressable>
            </>
          )}
        </View>
        
        <View style={styles.footer}>
          <Text style={styles.disclaimer}>
            By continuing, you agree to our Terms of Service and Privacy Policy. This app is not a substitute for professional medical advice.
          </Text>
        </View>
      </KeyboardAvoidingView>
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
    justifyContent: 'space-between',
  },
  header: {
    marginTop: 60,
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    color: colors.primary,
    marginBottom: 8,
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textLight,
    textAlign: 'center',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 12,
    fontWeight: '500',
  },
  input: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 12,
    padding: 16,
    fontSize: 18,
    color: colors.text,
    marginBottom: 24,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: 18,
    alignItems: 'center',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonText: {
    color: colors.background,
    fontSize: 18,
    fontWeight: '600',
  },
  textButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  textButtonText: {
    color: colors.textLight,
    fontSize: 16,
  },
  footer: {
    marginBottom: 20,
  },
  disclaimer: {
    fontSize: 12,
    color: colors.textLight,
    textAlign: 'center',
    lineHeight: 18,
  }
});
