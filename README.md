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
