import logo from './logo.svg';
import './App.css';
import Mybutton from './components/mybutton';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hallo cuyy 😋
        </p>
        <Mybutton />
      </header>
    </div>
  );
}

export default App;
