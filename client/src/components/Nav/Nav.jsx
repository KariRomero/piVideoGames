import style from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <div className={style.container}>

            <Link to='/home' className={style.link}>
                <button className={style.button}>Home</button>
            </Link>

            <SearchBar/>
        </div>
    )
};

export default Nav;