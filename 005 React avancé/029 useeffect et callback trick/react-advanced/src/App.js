import {useState, useEffect} from 'react'
import './App.css';

function App() {

  const [timer, setTimer] = useState(1)

  useEffect(() => {

    const intervalID = setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000)

    return () => {
      clearInterval(intervalID);
    }

  }, [])

  return (
    <div className="App">
        <h1>{timer}</h1>
    </div>
  );
}

export default App;
