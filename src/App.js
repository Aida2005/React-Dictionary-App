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
       Coded by Aida Hamedi
     </footer>
      </div>
    </div>
  );
}


