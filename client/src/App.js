import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './views/Home/Home';
import Detail from './views/Detail/Detail';
import Form from './views/Form/Form';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="main-content">
        <Routes>          
          <Route path='/' element={<Home />} />    
          <Route path='/detail/:id' element={<Detail />} />    
          <Route path='/form' element={<Form />} />        
        </Routes>
      </div>
      <About />
    </div>
  );
}

export default App;
