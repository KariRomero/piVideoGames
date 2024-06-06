import style from './Home.module.css';
import Cards from '../../components/Cards/Cards';
import Paginado from '../../components/Paginado/Paginado';
import NavGame from '../../components/NavGame/NavGame';
import Banner from '../../components/Banner/Banner';
import TopButton from '../../components/TopButton/TopButton';
import { useSelector, useDispatch } from 'react-redux';
import { changePage } from '../../redux/actions';

const Home = () => {
  const dispatch = useDispatch();
  const videogames = useSelector((state) => state.videogames);
  const videogameSearch = useSelector((state) => state.videogameSearch);
  const currentPage = useSelector((state) => state.page);
  const displayVideogames = videogameSearch.length > 0 ? videogameSearch : videogames;

  const gamesPerPage = 12;
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = Array.isArray(displayVideogames) ? displayVideogames.slice(indexOfFirstGame, indexOfLastGame) : [];

  const paginado = (pageNumber) => {
    dispatch(changePage(pageNumber));
  };

  return (
    <div>
      <div className={style.container}>
        <Banner />
        <NavGame />
        <Cards currentGames={currentGames} />
        <Paginado gamesPerPage={gamesPerPage} allGames={displayVideogames.length} paginado={paginado} />
      </div>
      <div>
        <TopButton />
      </div>
    </div>
  );
};

export default Home;
