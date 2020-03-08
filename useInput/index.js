import React, { useInput } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const maxLen = value => !value.includes('@');
  // const maxlen = value => value.length <= 10;
  const name = useInput('Mr.', maxLen);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="name" {...name} /> {/* unpack props */}
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
