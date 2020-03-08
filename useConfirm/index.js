import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const deleteWorld = () => console.log('deleting the world...');
  const abort = () => console.log('aborted');
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
