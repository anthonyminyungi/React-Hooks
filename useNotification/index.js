import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const triggerNotification = useNotification('Can I steal your Kimchi?', {
    body: "I love kimchi don't you?",
  });
  return (
    <div className="App" style={{ height: '10vh' }}>
      <button onClick={triggerNotification}>Hello</button>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
