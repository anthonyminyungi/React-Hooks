import React from 'react';

const App = () => {
    const titleUpdater = useTitle("Loading...");
    setTimeout(() => titleUpdater("Home"), 5000);
    return (
      <div className="App">
        <div>Hi</div>
      </div>
    );
  };
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);
  