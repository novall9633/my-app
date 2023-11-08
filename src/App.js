import logo from './logo.svg';
import './App.css';

function App() {
  let isrc = 'https://news.kbs.co.kr/data/news/2014/06/27/2883349_ml1.jpg';
  return (
    <div className="App">
      <header className="App-header">
        <img src={isrc} 
        style={{borderRadius:'50%'}}
        className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         따봉박
        </a>
      </header>
    </div>
  );
}

export default App;
