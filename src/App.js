import React, { useState } from 'react';
import { generatePDF } from './services/generatePDF';

function App() {
  const [name, setName] = useState('');

  const handleChange = event => {
    setName({ [event.target.name]: event.target.value });
  };

  const createAndDownload = event => {
    event.preventDefault();
    const data = { name };
    if (name !== '' || name !== undefined || name !== null) {
      generatePDF(data);
    }
  };

  return (
    <div className="App">
      <p className="generate-pdf">Generate PDF</p>
      <input
        type="text"
        placeholder="Name"
        name="name"
        className="form-input"
        onChange={handleChange}
      />
      <button className="form-btn" onClick={createAndDownload}>
        Download PDF
      </button>
    </div>
  );
}

export default App;
