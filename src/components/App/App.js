import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Information from '../Information/Information';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route 
          path='/'
          element={<Main />}
        />
        <Route 
          path='/information'
          element={<Information />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
