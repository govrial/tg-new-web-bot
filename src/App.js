import { useEffect } from 'react';
import './App.css';
import Button from './components/button/Button';

const tg = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    tg.ready();
  }, [])

  const onClose = () => {
    tg.close()
  }

  return (
    <div className="App">
    </div>
  );
}

export default App;
