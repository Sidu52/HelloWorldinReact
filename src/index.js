<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


=======
// Create a functional component called MyProject that returns the following UI:

// An h1 with the name of your project
// A paragraph to give a brief description of your project
// An ordered or unordered list to discuss 3 major skills used in this project
import React from 'react';
import ReactDOM from 'react-dom';

const App =() =>{
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
>>>>>>> 651ca35904b89c82434d5b48245a1b01c326fd91
