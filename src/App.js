import characters from './data/characters';
import Card from './components/Card';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='cards'>
        {characters.map(c => <Card key={c.name} name={c.name} image={c.img} link={c.link} />)}
      </div>
    </div>
  );
}

export default App;
