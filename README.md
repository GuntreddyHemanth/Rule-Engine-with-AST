# Rule Engine with AST (Abstract Syntax Tree)

## Overview
This project implements a simple rule engine using an Abstract Syntax Tree (AST) to determine user eligibility based on conditions like age, department, salary, and experience. The system supports dynamic creation, combination, and evaluation of rules.

### Tech Stack
- **Frontend**: React
- **Backend**: Node.js with Express
- **Database**: MongoDB

## Project Structure
- **backend/**: Node.js server with Express, responsible for rule creation and evaluation.
- **frontend/**: React app for interacting with the rule engine via a simple UI.

## Features
1. **Create Rule**: Takes a string representing a rule and converts it into an AST.
2. **Combine Rules**: Combines two or more rules into a single AST.
3. **Evaluate Rule**: Evaluates the rule against user data to determine eligibility.

---

## Setup Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/try/download/community) (running locally or use a MongoDB Atlas account)
- [Git](https://git-scm.com/downloads) (optional, for cloning the repository)

### Clone the Repository
1. Open your terminal/command prompt.
2. Clone the repository:
   ```bash
   git clone <repository-url>
   cd rule-engine-ast
Backend Setup
Navigate to the backend/ folder:
bash
Copy code
cd backend
Install dependencies:
bash
Copy code
npm install
Create a .env file to store your MongoDB connection string (or modify the connection string in server.js):
bash
Copy code
MONGODB_URI='your_mongodb_connection_string'
Start the MongoDB server on your machine or use a remote instance.
Run the backend server:
bash
Copy code
node server.js
The backend will run on http://localhost:3001.
Frontend Setup
Navigate to the frontend/ folder:
bash
Copy code
cd ../frontend
Install dependencies:
bash
Copy code
npm install
Run the React development server:
bash
Copy code
npm start
The frontend will run on http://localhost:3000.
