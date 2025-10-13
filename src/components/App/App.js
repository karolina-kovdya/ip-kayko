import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Routes>
        <Route
          path='/'
          element={<Main />} 
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
