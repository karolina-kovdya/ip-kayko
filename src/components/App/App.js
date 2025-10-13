import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Routes>
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
