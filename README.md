# Rosette 🌸

**Your companion for proactive breast health.**

Rosette is a React Native mobile application built with Expo, designed to empower users with tools for proactive breast health monitoring and education. It features a modern, supportive interface and integrates with Firebase for secure data management and notification services.

## ✨ Features

- **Auth Flow**: Easy and secure onboarding with phone-based authentication (mocked for development).
- **Symptom Tracking**: Log symptoms and receive instant guidance on breast health.
- **Self-Examination Guide**: Step-by-step instructions for performing breast self-exams.
- **Risk Assessment**: Automated risk assessment powered by Firebase Cloud Functions.
- **Modern UI**: A clean, accessible design with custom theme and smooth animations.

## 🛠️ Tech Stack

- **Frontend**: React Native, Expo, React Navigation
- **Backend**: Firebase (Authentication, Firestore, Cloud Functions)
- **Styling**: Native StyleSheet with custom theme design

## 🚀 Getting Started

To get started with the development environment, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo Go](https://expo.dev/expo-go) app on your mobile device (for device testing)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Jawknee-builds/rosette.git
   cd rosette
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run web
   # or
   npx expo start
   ```

4. **Open the app**:
   - For **Web**: Press `w` in the terminal to open the web version.
   - For **iOS/Android**: Scan the QR code with your Expo Go app.

## 📁 Project Structure

```text
rosette/
├── assets/          # Static assets like images and icons
├── firebase/        # Firebase rules and Cloud Functions
│   └── functions/   # Node.js backend functions
├── src/             # Source code
│   ├── components/  # Reusable UI components
│   ├── navigation/  # Navigation configuration
│   ├── screens/     # Application screens (Auth, Home, etc.)
│   ├── services/    # Data services (Firebase config, notifications)
│   └── theme/       # Design tokens (colors, spacing, etc.)
├── App.js           # Entry point
└── app.json         # Expo configuration
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private and intended for development and evaluation purposes.
