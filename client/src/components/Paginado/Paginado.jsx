import style from './Paginado.module.css';
import { useDispatch } from 'react-redux';
import { changePage } from '../../redux/actions';

const Paginado = ({ gamesPerPage, allGames }) => {
  const dispatch = useDispatch();

  const pageNumber = [];
  const cantPaginas = Math.ceil(allGames / gamesPerPage);

  for (let i = 1; i <= cantPaginas; i++) {
    pageNumber.push(i);
  }

  const handleChangepage = (page) => {
    dispatch(changePage(page));
  };

  return (
    <div className={style.paginacion}>
      {pageNumber && pageNumber.map(number => (
        <span key={number}>
          <button className={style.button} onClick={() => handleChangepage(number)}>{number}</button>
        </span>
      ))}
    </div>
  );
};

export default Paginado;
