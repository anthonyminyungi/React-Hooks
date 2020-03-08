import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const begForLife = () => console.log('plz dont leave');
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
