# Rosette 🌸

**Empowering proactive breast health with intelligence and care.**

Rosette is a modern, intuitive mobile application developed with React Native and Expo. It bridges the gap between clinical knowledge and daily wellness, providing users with the tools they need for regular self-monitoring, symptom tracking, and early detection—all within a secure and supportive environment.

## 🎗️ Why Rosette?

Breast health is too often reactive, with many individuals only seeking medical advice once symptoms are advanced. **Rosette** changes this narrative. Built for anyone proactive about their long-term health, it provides a structured yet gentle approach to monitoring changes, educating users on best practices, and offering immediate risk assessments. Our mission is to make breast health a seamless, stress-free part of your wellness routine.

## 🗺️ User Journey

1.  **Personalized Setup**: Secure onboarding using phone authentication to create your private health profile.
2.  **Guided Discovery**: Learn the "how" and "why" of breast health through our interactive education modules.
3.  **Monthly Ritual**: Follow step-by-step, visually guided self-examinations to establish your baseline.
4.  **Instant Logging**: Quickly record any changes or symptoms the moment they occur.
5.  **Smart Insights**: Receive automated risk assessments and clear guidance on the next steps for your clinical care.

## ✨ Key Features

- **Proactive Symptom Tracking**: Log and categorize symptoms with a user-friendly interface to track changes over time.
- **Guided Self-Examination**: Interactive, step-by-step instructions that remove the guesswork from monthly checks.
- **Intelligent Risk Assessment**: Backend analysis powered by Firebase Cloud Functions to provide instant, data-driven feedback.
- **Secure Phone Auth**: Privacy-first authentication ensures your health data remains yours.
- **Modern, Accessible UI**: A calming, high-contrast design system optimized for ease of use and emotional comfort.

## 🖼️ Screenshots

| Onboarding Flow | Home Dashboard | Guided Self-Exam | Symptom Checker |
| :---: | :---: | :---: | :---: |
| ![Onboarding - Securely start your health journey](https://via.placeholder.com/200x400?text=Onboarding+Screen) | ![Dashboard - Your health at a glance](https://via.placeholder.com/200x400?text=Home+Screen) | ![Self-Exam - Step-by-step guidance](https://via.placeholder.com/200x400?text=Self-Exam+Screen) | ![Symptom Checker - Quick & easy logging](https://via.placeholder.com/200x400?text=Symptom+Checker) |
| *Securely start your journey* | *Your health at a glance* | *Step-by-step guidance* | *Quick & easy logging* |

## 🛠️ Tech Stack

- **Frontend Core**: React Native & Expo (Cross-platform excellence)
- **Navigation**: React Navigation (Seamless transitions)
- **Backend Services**: Firebase (Auth, Firestore, Cloud Functions)
- **State & Data**: Real-time synchronization and secure cloud storage
- **Design System**: Custom CSS-in-JS tokens for a premium, consistent look

## 🚀 Getting Started

Experience Rosette on your own device in minutes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v16.x or later)
- [Expo Go](https://expo.dev/expo-go) app installed on your iOS or Android device

### Installation & Launch

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/Jawknee-builds/rosette.git
    cd rosette
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Start the engine**:
    ```bash
    npx expo start
    ```

4.  **Scan and Go**: Use your camera or the Expo Go app to scan the QR code displayed in your terminal. For web preview, simply press `w`.

## 📁 Project Structure

```text
rosette/
├── assets/          # Brand assets, icons, and walkthrough imagery
├── firebase/        # Security rules and intelligent Cloud Functions
├── src/
│   ├── components/  # Atomic UI primitives and layout patterns
│   ├── navigation/  # Routing logic and nav stacks
│   ├── screens/     # Rich, feature-driven page views
│   ├── services/    # API clients, Firebase config, and notifications
│   └── theme/       # Centralized design system (colors, typography)
├── App.js           # Main application entry point
└── app.json         # Expo manifest and project configuration
```

## 🤝 Contributing

We believe in the power of community-driven health tools. If you’re a developer or designer passionate about health-tech, please feel free to fork this repo and submit a Pull Request.

## 📄 License

This project is currently private and intended for development and evaluation purposes. All rights reserved.
