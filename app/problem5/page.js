import React from 'react';

// Functions to be used in the component
const tocase = (s) => s.toLowerCase() + '-' + s.toUpperCase();

const firstChar = (s) => {
  for (let char of s) {
    if (char !== ' ') {
      return char;
    }
  }
  return null;  
};

const rotate = (arr) => {
  if (!arr.length) {  
    return [];
  }
  return arr.slice(1).concat(arr[0]);
};

const StringArrayManipulator = ({ str, arr }) => {
  return (
    <div>
      <h1>Problem Statement 5</h1>
      <p><strong>Original String:</strong> {str}</p>
      <p><strong>ToCase:</strong> {tocase(str)}</p>
      <p><strong>First Non-space Character:</strong> {firstChar(str)}</p>
      <p><strong>Original Array:</strong> {JSON.stringify(arr)}</p>
      <p><strong>Rotated Array:</strong> {JSON.stringify(rotate(arr))}</p>
    </div>
  );
};


const App = () => {
  const exampleString = ' Rosa Parks';
  const exampleArray = ['a', 'b', 'c'];

  return (
    <div>
      <StringArrayManipulator str={exampleString} arr={exampleArray} />
    </div>
  );
};

export default App;
