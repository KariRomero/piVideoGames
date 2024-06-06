import style from './Detail.module.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogame } from '../../redux/actions';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";


const Detail = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getVideogame(id));        
      }, [dispatch,id]);

    const videogame = useSelector(state=>state.videogame);

    return(
                
            <div className={style.container}>
                <div className={style.imgcontainer}>
                    <img src={videogame.background_image ? videogame.background_image : videogame.image} alt={videogame.name} className={style.image}/>                        
                </div>
            
                <div className={style.content}>                        
                    <div className={style.name}>
                        <Link to='/'>
                            <button className={style.button}>
                                <FaArrowLeft/>
                            </button>
                        </Link>
                        {videogame.name}
                    </div>                  
                    
                    <article dangerouslySetInnerHTML={{ __html: videogame.description }} className={style.article} />
                    
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

        
    )
};

export default Detail;


