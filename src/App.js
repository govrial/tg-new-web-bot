import { useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import { useTelegram } from './hooks/useTelegram';

function App() {

  const {tg, methods} = useTelegram()

  useEffect(() => {
    tg.ready();
  }, [])

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
