import './App.css';

let name = 'peter';

const handleClick = () => {
  name = 'scar face';
  console.log(name)
}

function App() {
  return (
    <div className="App">
      <h2>My name is {name} </h2>
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
}

export default App;
