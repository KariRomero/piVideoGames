import style from './Home.module.css';
import Cards from '../../components/Cards/Cards';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogames } from '../../redux/actions';



const Home = () => {
  
  const dispatch = useDispatch(); 

    
  useEffect(() => {
    dispatch(getVideogames());
  }, []);
 
  
    return(
    <div className={style.background}>
      <div className={style.container}>
        <Cards />        
      </div>
    </div>
    )
};

export default Home;
