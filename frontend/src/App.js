import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [rule, setRule] = useState('');
  const [evaluationResult, setEvaluationResult] = useState(null);
  const [age, setAge] = useState('');
  const [department, setDepartment] = useState('');
  const [salary, setSalary] = useState('');
  const [experience, setExperience] = useState('');

  const createRule = () => {
    axios.post('http://localhost:3001/api/create_rule', { ruleString: rule })
      .then(response => {
        alert('Rule created: ' + response.data.message);
      })
      .catch(error => {
        alert('Error creating rule: ' + (error.response?.data?.error || error.message));
      });
  };

  const evaluateRule = () => {
    const data = {
      age: Number(age),
      department,
      salary: Number(salary),
      experience: Number(experience),
    };
    
    // Make sure to include the rule string to evaluate
    axios.post('http://localhost:3001/api/evaluate_rule', { ruleString: rule, userData: data })
      .then(response => {
        setEvaluationResult(response.data.eligible ? 'Eligible' : 'Not Eligible');
      })
      .catch(error => {
        alert('Error evaluating rule: ' + error.message);
      });
  };

  return (
    <div className="App">
      <h1>Rule Engine</h1>
      <input 
        type="text" 
        value={rule} 
        onChange={e => setRule(e.target.value)} 
        placeholder="Enter Rule String" 
      />
      <button onClick={createRule}>Create Rule</button>
      
      <h2>Evaluate Rule</h2>
      <input 
        type="number" 
        value={age} 
        onChange={e => setAge(e.target.value)} 
        placeholder="Age" 
      />
      <input 
        type="text" 
        value={department} 
        onChange={e => setDepartment(e.target.value)} 
        placeholder="Department" 
      />
      <input 
        type="number" 
        value={salary} 
        onChange={e => setSalary(e.target.value)} 
        placeholder="Salary" 
      />
      <input 
        type="number" 
        value={experience} 
        onChange={e => setExperience(e.target.value)} 
        placeholder="Experience" 
      />
      <button onClick={evaluateRule}>Evaluate Rule</button>
      {evaluationResult && <p>Evaluation Result: {evaluationResult}</p>}
    </div>
  );
}

export default App;
