import style from './Card.module.css';
import { Link } from 'react-router-dom';

const Card = ({id,name,genres,image,rating}) => {
    return(
        <div className={style.card}>
            <Link to={`/detail/${id}`} className={style.link}> 
                <div className={style.imgcontainer}>
                    <img src={image} alt={name} className={style.image}/>
                </div>

                <h3 className={style.genre}>{genres}</h3>
                <h3 className={style.genre}>{rating}</h3>
                        
                <h1 className={style.name}>{name}</h1>
            </Link>      
        </div>
    )
};

export default Card;