import React, {useState} from 'react';
import './App.css';

function App() {
  const [inputSound, setInputSound] = useState('');
  const [result, setResult] = useState('');

  const songs = [
    ["brr", "fiu", "cric-cric", "brrah"],
    ["pep", "birip", "trri-trri", "croac"],
    ["bri-bri", "plop", "cric-cric", "brrah"]
  ];

  const findRemainingSounds = () => {
    let remainingSounds = '';

    for (let song of songs) {
      if (song.includes(inputSound)) {
        const index = song.indexOf(inputSound);
        remainingSounds = song.slice(index + 1).join(", ");
        break;
      }
    }

    setResult(remainingSounds ? remainingSounds : 'No hay sonidos restantes.');
  };
 
  return (
    <div className="container">
     <img src={'funiber-400.jpg'} className="App-logo" alt="logo" />
      <h1>Explorador de Sonidos</h1>
      <input
        type="text"
        value={inputSound}
        onChange={(e) => setInputSound(e.target.value)}
        placeholder="Ingresa un sonido"
      />
      <button onClick={findRemainingSounds}>Buscar</button>
      <div id="result">{result}</div>
    </div>
  );
}

export default App;
