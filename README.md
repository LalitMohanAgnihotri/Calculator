🧮 Simple React Calculator
Project Description
This is a basic, single-page calculator application built using React. It demonstrates fundamental React concepts, including state management using the useState hook and component communication (passing data and functions between parent and child components).

🚀 Technologies Used
React: For building the user interface.

JavaScript: For core logic.

CSS Modules: For component-scoped styling.

🛠️ Installation and Setup
To get a local copy of this project up and running, follow these simple steps.

Prerequisites
You need Node.js and npm (Node Package Manager) installed on your system.

Steps
Clone the Repository:

Bash

git clone [YOUR-REPO-URL-HERE]
Navigate to the project directory:

Bash

cd simple-react-calculator
Install Dependencies:

Bash

npm install
Usage
Starting the Application
Once dependencies are installed, you can start the development server:

Bash

npm run dev
The application should automatically open in your web browser, typically at http://localhost:3000.

Core Logic Overview
The main calculator logic resides in the App.jsx component:

State: The display value (calVal) is managed by useState.

Input: Number and operator buttons append their values to calVal.

Clear: The 'AC' button resets calVal to an empty string.

Calculation: The '=' button uses JavaScript's eval() function to compute the result of the expression string currently stored in calVal.

⚠️ Security Note
This example uses the built-in JavaScript eval() function for simplicity. While acceptable for closed, simple projects like this, eval() is generally avoided in production applications due to potential security vulnerabilities when handling complex or untrusted user input.
