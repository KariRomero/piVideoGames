import style from './Card.module.css';
import { Link } from 'react-router-dom';

const Card = (props) => {

    const id = props.id

    return(
        <div className={style.container}>
            <div className={style.imgcontainer}>
                <img src={props.image} alt={props.name} className={style.image}/>
            </div>

           
            <div className={style.genre}>{props.genres}</div>

            <Link to={`/detail/${id}`} className={style.link}>
            <div className={style.name}>{props.name}</div>
            </Link>      

        </div>
    )
};

export default Card;