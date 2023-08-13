import style from './Detail.module.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogame } from '../../redux/actions';
import { Link } from 'react-router-dom';

const Detail = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getVideogame(id));
        
      }, []);

    const videogame = useSelector(state=>state.videogame);
    console.log(videogame);


    return(
        <div className={style.background}>
            <div className={style.container}>

                    <div className={style.imgcontainer}>
                        <img src={videogame.background_image ? videogame.background_image : videogame.image} alt={videogame.name} className={style.image}/>                        
                    </div>
            
                    <div className={style.content}>                        
                        <div className={style.name}>{videogame.name}</div> 

                        <div className={style.buttoncont}>
                            <Link to='/home'>
                            <button className={style.button}>Back</button>
                            </Link>
                        </div>
                        
                        <article dangerouslySetInnerHTML={{ __html: videogame.description }} className={style.article} />
                        {/* <div className={style.detail}>Id:{videogame.id}</div> */}

                        

                        <div className={style.detail}>{videogame.released}</div> 
                        <div className={style.detail}>Rating:{videogame.rating}</div>
                        <div className={style.detail}>
                        {
                            videogame?.platformVideogame ? videogame?.platformVideogame && videogame?.platformVideogame.join(', ') 
                            :  videogame?.platforms && videogame?.platforms.join(', ')
                        }
                        </div>

                        <div className={style.detail}>
                        {
                            videogame.genresVideogame?.map(e => typeof (e) === 'object' ? e.name : e).join(', ') 
                            || videogame.Genres?.map(e => typeof (e) === 'object' ? e.name : e).join(', ')
                        }
                        </div>                    
                        
                                               
                                                
                    </div>

                    

            </div>

                        

        </div>
    )
};

export default Detail;


