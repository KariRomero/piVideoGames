import style from './Nav.module.css';
import { GiConsoleController } from "react-icons/gi";
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';


const Nav = () => {    
    return(
        <div className={style.container}>   
            <div>
                <Logo/>

            </div>
            <div>
                <Link to='/form'>
                    <button className={style.button}>               
                        <GiConsoleController/> New Game                           
                    </button>
                </Link>  
            </div>           
        </div>
    )
};

export default Nav;