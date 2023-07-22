import style from './Detail'

const Detail = () => {
    return(
        <div className={style.container}>

            <div className={style.detail}>Id:</div>
            <div className={style.detail}>Nombre:</div>
            <div className={style.detail}>Imagen:</div>
            <div className={style.detail}>Plataformas:</div>
            <div className={style.detail}>Descripción:</div>
            <div className={style.detail}>Fecha de lanzamiento:</div>
            <div className={style.detail}>Rating:</div>
            <div className={style.detail}>Géneros:</div>

        </div>
    )
};

export default Detail;
