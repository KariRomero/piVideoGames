import style from './Detail.module.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogame } from '../../redux/actions';

const Detail = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getVideogame(id));
      }, []);

    const videogame = useSelector(state=>state.videogame);


    return(
        <div className={style.background}>
            <div className={style.container}>

                    <div className={style.imgcontainer}>
                        <img src={videogame.background_image} alt={videogame.name} className={style.image}/>
                    </div>
            
                    <div className={style.content}>                        
                        <div className={style.name}>{videogame.name}</div>
                        <article dangerouslySetInnerHTML={{ __html: videogame.description }} className={style.article} />
                        {/* <div className={style.detail}>Id:{videogame.id}</div> */}

                        

                        <div className={style.detail}>{videogame.released}</div> 
                        <div className={style.detail}>Rating:{videogame.rating}</div>
                        <div className={style.detail}>
                        {
                            videogame.platformVideogame && videogame.platformVideogame.join(', ')
                        }
                        </div>

                        <div className={style.detail}>
                        {
                            videogame.genresVideogame && videogame.genresVideogame.join(', ')
                        }
                        </div>                    
                        
                        {/* <div className={style.detail}>{videogame.platformVideogame.join(', ')}</div>*/}
                        {/* <div className={style.detail}>{videogame.genresVideogame.join(', ')}</div> */}
                        
                                                
                    </div>

                    

            </div>
        </div>
    )
};

export default Detail;


