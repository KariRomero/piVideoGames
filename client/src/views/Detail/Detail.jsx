import style from './Detail.module.css';

const Detail = () => {
    return(
        <div className={style.background}>
            <div className={style.container}>

                {/* <div className={style.imgcontainer}>
                    <img src={props.image} alt={props.name} className={style.image}/>
                </div> */}
            <div className={style.content}>
                <div className={style.detail}>Id:</div>
                <div className={style.detail}>Nombre:</div>
                <div className={style.detail}>Plataformas:</div>
                <div className={style.detail}>Descripción:</div>
                <div className={style.detail}>Fecha de lanzamiento:</div>
                <div className={style.detail}>Rating:</div>
                <div className={style.detail}>Géneros:</div>

            </div>

            </div>
        </div>
    )
};

export default Detail;
