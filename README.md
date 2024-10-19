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

### Backend Setup
1. Navigate to the backend/ folder:
   ```bash
    cd backend
2. Install dependencies
   ```bash 
   npm install
3. Create a .env file to store your MongoDB connection string (or modify the connection string in server.js):
   ```bash
   MONGODB_URI='your_mongodb_connection_string'
4. Start the MongoDB server on your machine or use a remote instance.
5. Run the backend server:
   ```bash
   node server.js

## The backend will run on http://localhost:3001. ##


### Frontend Setup
1. Navigate to the frontend/ folder:
   ```bash
   cd ../frontend
2. Install dependencies:
   ```bash
   npm install
3. Run the React development server:
   ```bash
   npm start

## The frontend will run on http://localhost:3000. ##

### API Endpoints
- **POST /api/create_rule**: Creates a new rule and stores its AST in the database.
     - **Request Body**: { "ruleString": "((age > 30 AND department = 'Sales') OR (salary > 50000))" }
- **POST /api/evaluate_rule**: Evaluates the rule's AST with user data and returns eligibility.
     - **Request Body**: { "ruleString": "((age > 30 AND department = 'Sales') OR (salary > 50000))", "userData": { "age": 35,       "department": "Sales", "salary": 60000, "experience": 5 } }


# Example Usage

### Sample Rule
- **Rule String**:
   ```bash
   ((age > 30 AND department = 'Sales') OR (salary > 50000))
### Sample User Data
```bash
{
  "age": 35,
  "department": "Sales",
  "salary": 60000,
  "experience": 5
}



