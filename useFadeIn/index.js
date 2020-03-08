import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 10);
  return (
    <div className="App">
      <h1 {...fadeInH1}>hello</h1>
      <p {...fadeInP}>lorem ipsum lalalal</p>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
