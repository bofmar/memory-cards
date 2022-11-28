import characters from './data/characters';
import './App.css';

function App() {
  return (
    <div className="App">
      {characters.map(c => <div><img src={c.img} /><a href={c.link} target='__blank'>{c.name}</a></div>)}
    </div>
  );
}

export default App;
