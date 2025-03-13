import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import SiteBar from './components/siteBar/siteBar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Psychosomatics Biletska V.</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
      </div> */}
      <SiteBar />
      <Footer />
    </>
  );
}

export default App;
