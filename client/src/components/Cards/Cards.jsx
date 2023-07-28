import Card from '../Card/Card';
import style from './Cards.module.css';
import { useSelector } from "react-redux";

const Cards = () => {
    
    const videogames = useSelector((state) => state.videogames);
    const videogameSearch = useSelector((state) => state.videogameSearch);

    const displayVideogames = videogameSearch.length > 0 ? videogameSearch : videogames;

    // const videogames = useSelector((state)=>state.videogames);
    //const videogameSearch = useSelector((state)=>state.videogameSearch);
  


    return(
        <div className={style.container}>
            {displayVideogames.map(videogame=>{
                return <Card
                id={videogame.id}
                name={videogame.name}
                genres={videogame.genres}
                image={videogame.background_image}                
                />
            })}
        </div>
    )
};

export default Cards;


