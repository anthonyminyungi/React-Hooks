import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const handleNetworkChange = online => {
    console.log(online ? 'we just went online' : 'We are offline');
  };
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div className="App">
      <h1>{onLine ? 'Online' : 'Offline'}</h1>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
