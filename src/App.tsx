import React from 'react';

function App() {
  return (
    <div className="main-wrapper">
      <h1>What was it worth?</h1>
      <p>A simple inflation calculator.</p>
      <form>
        <select name="currency" id="currencySelect">
          <option value="usa">USA</option>
          <option value="rsa">RSA</option>
        </select>
        <span>in</span>
      
        <select name="year" id="yearSelect">
          <option value="1998">1998</option>
          <option value="2012">2012</option>
        </select>
        <button>Calculate</button>
      </form>
      <div className="output-display">
        $12 in 1998 was worth $20.88 today.
      </div>
    </div>
  );
}

export default App;
