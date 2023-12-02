import style from './Nav.module.css';
import { GiConsoleController } from "react-icons/gi";
import { Link } from 'react-router-dom';


const Nav = () => {

    

    
    return(
        <div className={style.container}>            
            <div>
                
               

                <Link to='/form' className={style.link}>
                    <button className={style.button}>
                      
                        <GiConsoleController/> New Game
                           
                    </button>
                </Link>
                <Link to='/contact' className={style.link}>
                    <button className={style.button}>Contact</button>
                </Link>    

                {/* <button className={style.button} onClick={handleReset}>Reset</button>  */}
            </div>                            

            
        </div>
    )
};

export default Nav;