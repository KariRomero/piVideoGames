import style from './Card.module.css';
import { Link } from 'react-router-dom';

const Card = ({id,name,genres,image}) => {

    

    return(
        <div className={style.container}>
            
            <div className={style.imgcontainer}>
                {image && <img src={image} alt={name} className={style.image}/>}
            </div>

           
            <div className={style.genre}>{genres}</div>

            <Link to={`/detail/${id}`} className={style.link}>
            <div className={style.name}>{name}</div>
            </Link>      

        </div>
    )
};

export default Card;