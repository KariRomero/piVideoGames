import style from './Card.module.css';
import { Link } from 'react-router-dom';

const Card = ({id,name,genres,image,rating}) => {

    

    return(
        <div className={style.container}>
            <Link to={`/detail/${id}`} className={style.link}> 
            <div className={style.imgcontainer}>
                <img src={image} alt={name} className={style.image}/>
            </div>

            <div className={style.genre}>{genres}</div>
            <div className={style.genre}>{rating}</div>
                    
            <div className={style.name}>{name}</div>
            </Link>      

        </div>
    )
};

export default Card;