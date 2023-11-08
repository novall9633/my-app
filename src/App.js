import logo from './logo.svg';
import './App.css';

function App() {
  let isrc = 'https://i.namu.wiki/i/p35U7syMZIFnV-coFYeeawD2d7JJMVxAftnej48rVmWc2HPj1SoOeghu9f3d2tWBVS-FmyihWIXHJKf2GxJPOQK2wKeqmLyLgctNVjm40JvTiD_U5mKg-R0fvuTFUYP4zPOeNh_Le9CaHAtF3gLQyA.webp';
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
         슈포쏳니
        </a>
      </header>
    </div>
  );
}

export default App;
