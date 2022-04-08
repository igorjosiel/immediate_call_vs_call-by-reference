import React, { useState } from 'react';

function App() {
  const [test, setTest] = useState('');

  const renderTextImmediately = () => {
    console.log('Chamada imediata');
    // setTest('imediata');

    return (
      <div>
        <h1>Chamada Imediata</h1>
        <p>Testando chamada de função de forma imediata.</p>
      </div>
    );
  };

  const functionByReference = () => {
    console.log('Chamada por referência');
    setTest('referência');

    return (
      <div>
        <h1>Chamada por referência</h1>
        <p>Testando chamada de função por referência.</p>
      </div>
    );
  };

  return (
    <div className="App">
      {renderTextImmediately()}
      <button onClick={functionByReference}>Testando...</button>

      {test}
    </div>
  );
}

export default App;
