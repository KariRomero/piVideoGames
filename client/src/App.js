import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Landing from './views/Landing/Landing';
import Nav from './components/Nav/Nav';
import Home from './views/Home/Home';
import Detail from './views/Detail/Detail';




function App() {

  const location = useLocation()
    const showNav = location.pathname !== '/';

  


  return (

    <div className="App">
      {showNav && <Nav/>}

        <Routes>

          <Route path= "/" element= {<Landing/>}/>
          <Route path='/home' element ={<Home/>}/>    
          <Route path='/detail/:id' element={<Detail/>}/>    

        </Routes>


    </div>
  );
}

export default App;



/*
https://api.rawg.io/api/games?search={game}

const [characters, setCharacters] = useState([]);

function onSearch(name) {
      axios(`https://api.rawg.io/api/games?search={name}`).then(({ data }) => {
         if (data.name) {
            let exist = characters.find((character)=>character.name === data.name);
            if (exist){
               alert('Ya existe');
            } else {
            setCharacters((oldChars) => [...oldChars, data]);
         }
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }




*/
