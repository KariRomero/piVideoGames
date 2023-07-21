import style from './Landing.module.css';
import { Link } from 'react-router-dom';

const Landing = () => {
    return(
        <div className={style.background}>
            <div className={style.container}>
                <Link to='/home'>
                    <button className={style.button}>PLAY !</button>            
                </Link>
            </div>
        </div>
    )
};


export default Landing;