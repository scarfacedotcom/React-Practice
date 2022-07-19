import './App.css';
import { useState } from 'react'


function App() {
  const [ name, setName] = useState('peter')

  const handleClick = () => {
    setName('scarface')
    console.log(name)
  }
  return (
    <div className="App">
      <h2>My name is {name} </h2>
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
}

export default App;
