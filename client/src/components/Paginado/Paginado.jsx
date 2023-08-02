import style from './Paginado.module.css';
import { changePage } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';

const Paginado = ({gamesPerPage, allGames, paginado}) => {
    
    const {page:pagina} = useSelector((state)=>state)
    const dispatch = useDispatch();
   

    const pageNumber = []
    const cantPaginas = Math.ceil(allGames/gamesPerPage)

    for(let i = 1; i <= cantPaginas; i++) {   //el Math.ceil() devuelve el entero mayor o igual más próximo a un número dado.
        //i <= 100/15 = 6.66 => Math.ceil(6.66) = 7 => 1 <= 7
        pageNumber.push(i)
    }

    const handleChangepage = (page) => {
        dispatch(changePage(page))
    };

    

    return (
        <nav>
            <div className={style.paginacion}>

                <button onClick={()=>handleChangepage(pagina-1)}
                disabled={pagina === 0}
                key={'prev'}>
                    {'PREV'}
                </button>                
             
                {pageNumber && pageNumber.map(number => ( //si en pageNumber hay algo mapealo
                    <span key={number}>
                        <button className={style.button} onClick={() => paginado(number)}>{number}</button> {/* y por cada elemento renderizame un boton y agregales un evento onClick, el cual establecera el numero de pagina en el que me encuentro*/}
                    </span>
                ))}

                <button onClick={()=>handleChangepage(pagina+1)}
                disabled={pagina===cantPaginas}
                key={'next'}>
                    {'NEXT'}
                </button> 

            </div>
        </nav>
    )
}




export default Paginado