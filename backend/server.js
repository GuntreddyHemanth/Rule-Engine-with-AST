const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Use CORS middleware
// Initialize Express
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://guntreddyhemanth:74jKX6sBVgVJbu6Z@cluster0.z8n5h.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Rule Schema and Model
const ruleSchema = new mongoose.Schema({
  ruleAST: Object,
  ruleString: String,
});
const Rule = mongoose.model('Rule', ruleSchema);

// Utility to parse rule string into AST
function parseRuleString(ruleString) {
  // Simple parser for demonstration
  return {
    type: 'operator',
    operator: 'AND',
    left: { type: 'operand', value: 'age > 30' },
    right: {
      type: 'operator',
      operator: 'OR',
      left: { type: 'operand', value: "department = 'Sales'" },
      right: { type: 'operand', value: 'salary > 50000' }
    }
  };
}

// Function to evaluate rules based on the AST and user data
function evaluateRule(ruleAST, data) {
  if (!data || !data.age || !data.department || !data.salary) {
    throw new Error('Invalid data for evaluation');
  }

  if (ruleAST.type === 'operator') {
    const leftEval = evaluateRule(ruleAST.left, data);
    const rightEval = evaluateRule(ruleAST.right, data);

    if (ruleAST.operator === 'AND') {
      return leftEval && rightEval;
    } else if (ruleAST.operator === 'OR') {
      return leftEval || rightEval;
    }
  } else if (ruleAST.type === 'operand') {
    const condition = ruleAST.value;

    if (condition.includes('age')) {
      return eval(condition.replace('age', data.age)); 
    } else if (condition.includes('department')) {
      return condition.split('=').pop().trim().replace(/'/g, '') === data.department; 
    } else if (condition.includes('salary')) {
      return eval(condition.replace('salary', data.salary)); 
    }
  }

  return false;
}

// API to create a rule
app.post('/api/create_rule', async (req, res) => {
  const { ruleString } = req.body;
  if (!ruleString) return res.status(400).json({ error: 'Invalid rule string' });

  const ruleAST = parseRuleString(ruleString);
  const newRule = new Rule({ ruleAST, ruleString });
  await newRule.save();

  return res.status(201).json({ message: 'Rule created', rule: newRule });
});

// API to evaluate a rule
app.post('/api/evaluate_rule', async (req, res) => {
  const { ruleString, userData } = req.body;

  if (!ruleString || !userData) {
    return res.status(400).json({ error: 'Invalid request data' });
  }

  const ruleAST = parseRuleString(ruleString);
  
  try {
    const isEligible = evaluateRule(ruleAST, userData);
    return res.status(200).json({ eligible: isEligible });
  } catch (error) {
    console.error('Error during evaluation:', error);
    return res.status(500).json({ error: 'Error during rule evaluation' });
  }
});

// Start the server
const port = 3001;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
