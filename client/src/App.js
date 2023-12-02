import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Landing from './views/Landing/Landing';
import Nav from './components/Nav/Nav';
import Home from './views/Home/Home';
import Detail from './views/Detail/Detail';
import Form from './views/Form/Form';
import Logo from './components/Logo/Logo';
import Contact from './views/Contact/Contact';
// import SearchByName from './components/SearchByName/SearchByName';





function App() {

  const location = useLocation()
    const show = location.pathname === '/';
    const showLogo = true;

  


  return (

    <div className="App">
      {show && <Nav/>}
      {show && <Logo/>}
      

        <Routes>

          
          <Route path='/' element ={<Home/>}/>    
          <Route path='/detail/:id' element={<Detail/>}/>    
          <Route path='/form' element={<Form/>}/>    
          <Route path='/contact' element={<Contact/>}/>               
         

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
