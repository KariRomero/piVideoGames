import logo from '../Logo/icon2.png';
import style from './Logo.module.css';
import { Link } from 'react-router-dom';

const Logo =()=>{
    return(
        <div className={style.containerLogo}>
            <Link to='/'>
            <img src={logo} alt='Logo' className={style.logoImg} />
            </Link>            
        </div>
    )
};

export default Logo;