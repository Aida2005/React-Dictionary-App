import logo from "./logo.jpg";
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
        <h1 className="logo">Welcome to Yildiz Dictionary</h1>
      </header>
      <main>
        <Dictionary defaultKeyword="Hello"/>
      </main>
      <footer className="App-footer">
       This project was coded by <a href="https://hungry-mirzakhani-f66424.netlify.app" target="_blank" rel="noopener noreferrer">Aida Hamedi</a> and <a href="https://github.com/shecodesio/dictionary" target="_blank" rel="noopener noreferrer"> is open-sourced on GitHub</a> and <a href="https://shecodes-dictionary.netlify.app/" target="_blank" rel="noopener noreferrer">hosted on Netlify</a>
     </footer>
      </div>
    </div>
  );
}


