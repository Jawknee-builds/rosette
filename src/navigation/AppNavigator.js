import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import Screens
import AuthScreen from '../screens/AuthScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import HomeScreen from '../screens/HomeScreen';
import SelfExamScreen from '../screens/SelfExamScreen';
import SymptomCheckerScreen from '../screens/SymptomCheckerScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tabs for main app functionality
function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Self Exam" component={SelfExamScreen} />
      <Tab.Screen name="Symptoms" component={SymptomCheckerScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  // In a real app we'd use Firebase Auth state listener
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isAuthenticated ? (
          // Auth Flow
          <Stack.Screen name="Auth" component={AuthScreen} initialParams={{ setIsAuthenticated }} />
        ) : !hasCompletedOnboarding ? (
          // Onboarding Flow
          <Stack.Screen name="Onboarding" component={OnboardingScreen} initialParams={{ setHasCompletedOnboarding }} />
        ) : (
          // Main App
          <Stack.Screen name="MainTabs" component={MainTabs} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
