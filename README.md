# Onboarding Screen Project

## Overview
This project implements an onboarding screen using Expo and React Native. The screen is designed to provide a welcoming introduction to the app, allowing users to either snap or upload a photo as part of the onboarding process.

## Design Approach
To match the design from the provided mockup (`finderly.png`), the following components and styles were implemented:

- **Background Image**: The screen features a full-screen background image that serves as the visual backdrop for the onboarding content.
- **Text Layout**: The text is displayed in two lines:
  - "Snap"
  - "Upload a Photo"
  
  This text is aligned to the left with appropriate padding to ensure it does not touch the screen edges, following best practices for spacing.

- **Call-to-Action Button**: A "Get Started" button is positioned at the bottom of the screen, centered horizontally. The button has a smooth background color and is designed to be easily tappable.

- **Font**: The Poppins font is used for all text elements to maintain consistency with the design.

- **Animations**: A fade-in animation is applied to the entire screen for a smooth entry effect, enhancing the user experience.

## Libraries Used
- **Expo**: The project is built using Expo, which simplifies the development process for React Native applications.
- **expo-font**: This library is used to load custom fonts (Poppins) into the application.
- **@react-navigation/native** and **@react-navigation/native-stack**: These libraries are used for navigation between the onboarding screen and the next screen.

## Core Components
- **OnboardingScreen**: This component contains the main layout, including the background image, text, and button.
- **NextScreen**: A placeholder screen that the app navigates to when the "Get Started" button is pressed.

## Trade-offs and Assumptions
- **No Camera or File Upload Functionality**: The project does not implement actual camera or file upload functionality, as the focus is on the onboarding screen design. It is assumed that this screen is the first step in a multi-step onboarding process.
- **Responsive Design**: While the layout is designed to be responsive, further enhancements could be made to ensure optimal display on various screen sizes (phones vs. tablets). The current implementation uses percentage-based dimensions and padding to achieve a basic level of responsiveness.
- **Static Content**: The text content is static for this implementation. Future iterations could include dynamic content, user input, or support for multiple languages to enhance accessibility and user experience.

## Screenshots
Here are screenshots of the final project for both iOS and Android:

### iOS Screenshot
![iOS Screenshot](assets/Simulator_iPhone_16_Pro_Max.png)

### Android Screenshot
![Android Screenshot](/assets/Screenshot_1742065150.png)

## Conclusion
This onboarding screen serves as a foundational component for the app, providing a visually appealing and user-friendly introduction. The design closely follows the provided mockup, and the implementation leverages modern React Native practices to ensure clarity and maintainability.

## How to Run the Project
1. Clone the repository.
2. Navigate to the project directory.
3. Run the following command to install dependencies:
   ```bash
   npm install
   ```
4. Start the Expo project:
   ```bash
   npm start
   ```


