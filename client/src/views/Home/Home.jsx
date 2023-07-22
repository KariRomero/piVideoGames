import style from './Home.module.css';
import Cards from '../../components/Cards/Cards';


const Home = () => {

    

    return(
    <div className={style.background}>
      <div className={style.container}>
      <Cards/>
      </div>
    </div>
    )
};

export default Home;