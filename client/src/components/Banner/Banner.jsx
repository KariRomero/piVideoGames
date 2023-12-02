import bannerImage from '../Banner/data/zonaGamer.png';
import style from './Banner.module.css'

const Banner = ()=>{
    return(
        <div className={style.bannerContainer} >

            <img src={bannerImage} alt='Zona Gamer banner' className={style.banerImg} />

        </div>
    )
};

export default Banner;