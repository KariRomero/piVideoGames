import Card from '../Card/Card';
import style from './Cards.module.css';
import imgNotFound from './Data/imgNotFound.jpg';
import { useDispatch } from "react-redux";
// import { useState } from 'react';
import { getVideogames } from '../../redux/actions';
import { useEffect } from 'react';

const Cards = ({currentGames}) => {
    
    // const videogames = useSelector((state) => state.videogames);
    // const videogameSearch = useSelector((state) => state.videogameSearch);
    // const displayVideogames = videogameSearch.length > 0 ? videogameSearch : videogames;


    // // Personajes por página y crear estado con los personajes a mostrar:
    // const videogamesPerPage = 20;
    // const [videoG, setVideoG] = useState([...displayVideogames].slice(0, videogamesPerPage));

    // // Página actual y dar función a los botones
    // const [currentPage, setCurrentPage] = useState(0);

    // const prevHandler = () => {
    //     const prevPage = currentPage - 1;
    //     if (prevPage < 0) return;
    //     const firstIndex = prevPage * videogamesPerPage;
    //     const lastIndex = firstIndex + videogamesPerPage;
    //     setVideoG([...displayVideogames].slice(firstIndex, lastIndex));
    //     setCurrentPage(prevPage);
    // }

    // const nextHandler = () => {
    //     const totalCharacters = displayVideogames.length;
    //     const nextPage = currentPage + 1;
    //     const firstIndex = nextPage * videogamesPerPage;
    //     const lastIndex = firstIndex + videogamesPerPage;
    //     // console.log("firstIndex", firstIndex, "total", totalCharacters);
    //     if (firstIndex > totalCharacters) return;
    //     setVideoG([...displayVideogames].slice(firstIndex, lastIndex));
    //     setCurrentPage(nextPage);
    // }

    // // Mostrar número de páginas
    // const totalPages = Math.ceil(displayVideogames.length / videogamesPerPage);
    // console.log(totalPages);

    // console.log(displayVideogames)

    const dispatch = useDispatch();
    // const [carga, setCarga] = useState(true);

    useEffect(() => {
      dispatch(getVideogames()) //me traigo la action creators q me trae todos mis videojuegos de la API
    },[]);


    return(
        <div className={style.container}>
            
            
            {currentGames.length > 0 &&
            currentGames.map(videogame => {
                return (<Card
                    key={videogame.id}
                    id={videogame.id}
                    name={videogame.name}
                    genres={videogame.genres?.map(e => typeof (e) === 'object' ? e.name : e).join(', ')}
                    image={videogame.background_image}
                    // image={videogame.background_image ? videogame.background_image : imgNotFound}
                    />)})}

        

        </div>
    )
};

export default Cards;


