import style from './Card.module.css';
import { Link } from 'react-router-dom';

const Card = (props) => {
    return(
        <div className={style.container}>
            <div className={style.imgcontainer}>
                <img src={props.image} alt={props.name} className={style.image}/>
            </div>

           
            <div className={style.genre}>{props.genres}</div>

            <Link to={`/detail/${props.name}`} className={style.link}>
            <div className={style.name}>{props.name}</div>
            </Link>      

        </div>
    )
};

export default Card;