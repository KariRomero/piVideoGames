import style from './Home.module.css';
import Cards from '../../components/Cards/Cards';
import Paginado from '../../components/Paginado/Paginado';
import Filtrados from '../../components/Filtrados/Filtrados';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogames, filterByOrigin, filterByGenres, filterByOrder } from '../../redux/actions';



const Home = () => {

  const videogames = useSelector((state) => state.videogames);
  const videogameSearch = useSelector((state) => state.videogameSearch);
  const displayVideogames = videogameSearch.length > 0 ? videogameSearch : videogames;

  const [currentPage, setCurrentPage] = useState(1) //lo seteo en 1 porque siempre arranco por la primer pagina
  const gamesPerPage = 15//cantidad de juegos que debe haber por pagina
  const indexOfLastGame = currentPage * gamesPerPage // 1 * 15 = 15
  const indexOfFirstGame= indexOfLastGame - gamesPerPage // 15 - 15 = 0
  //const currentGames = displayVideogames.slice(indexOfFirstGame, indexOfLastGame) //para dividir la cantidad de juegos por pagina
  const currentGames = Array.isArray(displayVideogames) ? displayVideogames.slice(indexOfFirstGame, indexOfLastGame) : [];

  const dispatch = useDispatch(); 

  const paginado = (pageNumber) => { //establece el numero de pagina
    setCurrentPage(pageNumber)
}
//const paginado = (5) => {
    //setCurrentPage(5)
//}

useEffect(() => {
  window.scrollTo(0, 0);
}, [currentPage])

function handleOrigin(e) {
  e.preventDefault()
  if(e.target.value === '') {
      dispatch(getVideogames())
  } else {
      dispatch(filterByOrigin(e.target.value))
      setCurrentPage(1)
  }
}

function handleGenres(e) {
  e.preventDefault()
  if(e.target.value === '') {
      dispatch(getVideogames())
  } else {
      dispatch(filterByGenres(e.target.value))
      setCurrentPage(1)
  }
}

function handleOrder(e) {
  e.preventDefault()
  if(e.target.value === '') {
      dispatch(getVideogames())
  } else {
      dispatch(filterByOrder(e.target.value))
      setCurrentPage(1)
  }
}

   
    return(
    <div className={style.background}>

      <div className={style.containerWrapper}>

      <div className={style.containerfilt}>
         <Filtrados handleOrigin={handleOrigin} handleGenres={handleGenres} handleOrder={handleOrder}/>
      </div>

      <div className={style.containercards}>
        <Cards currentGames={currentGames}/>        
      </div>

      <div className={style.containerpag}>
        <Paginado gamesPerPage={gamesPerPage} allGames={displayVideogames.length} paginado={paginado} />
      </div>

    </div>
    </div>
    )
};

export default Home;
