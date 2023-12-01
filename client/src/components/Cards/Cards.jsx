import Card from '../Card/Card';
import style from './Cards.module.css';
//import imgNotFound from './Data/imgNotFound.jpg';
import { useDispatch } from "react-redux";
import { getVideogames } from '../../redux/actions';
import { useEffect } from 'react';

const Cards = ({currentGames}) => {
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getVideogames())
      
      },[]);


    return(
        <div className={style.container}>
            
            
            {currentGames.length > 0 &&
            currentGames.map(videogame => {
                return (<Card
                    key={videogame.id}
                    id={videogame.id}
                    name={videogame.name}
                    genres={videogame.genres?.map(e => typeof (e) === 'object' ? e.name : e).join(', ') || videogame.Genres?.map(e => typeof (e) === 'object' ? e.name : e).join(', ')}
                    image={videogame.image ? videogame.image : videogame.background_image }
                    rating={videogame.rating}
                    />)})}

        

        </div>
    )
};

export default Cards;


