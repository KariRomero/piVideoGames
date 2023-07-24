import Card from '../Card/Card';
import style from './Cards.module.css';
import { useSelector } from "react-redux";

const Cards = () => {

     const videogames = useSelector(state=>state.videogames)
  
    // const videogames = [
    //     {
    //         "id": 3498,
    //         "name": "Grand Theft Auto V",
    //         "platforms": [
    //             "PlayStation 5",
    //             "Xbox Series S/X",
    //             "PlayStation 4",
    //             "PC",
    //             "PlayStation 3",
    //             "Xbox 360",
    //             "Xbox One",
    //             "PC",
    //             "PlayStation",
    //             "Xbox"
    //         ],
    //         "background_image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
    //         "released": "2013-09-17",
    //         "rating": 4.47,
    //         "genres": [
    //             "Action",
    //             "Adventure"
    //         ]
    //     },
    //     {
    //         "id": 3328,
    //         "name": "The Witcher 3: Wild Hunt",
    //         "platforms": [
    //             "Xbox Series S/X",
    //             "PlayStation 4",
    //             "Nintendo Switch",
    //             "PC",
    //             "Xbox One",
    //             "PlayStation 5",
    //             "PC",
    //             "PlayStation",
    //             "Xbox",
    //             "Nintendo"
    //         ],
    //         "background_image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
    //         "released": "2015-05-18",
    //         "rating": 4.66,
    //         "genres": [
    //             "Action",
    //             "Adventure",
    //             "RPG"
    //         ]
    //     },
    //     {
    //         "id": 4200,
    //         "name": "Portal 2",
    //         "platforms": [
    //             "Xbox 360",
    //             "Linux",
    //             "macOS",
    //             "PlayStation 3",
    //             "PC",
    //             "Xbox One",
    //             "PC",
    //             "PlayStation",
    //             "Xbox",
    //             "Apple Macintosh",
    //             "Linux"
    //         ],
    //         "background_image": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
    //         "released": "2011-04-18",
    //         "rating": 4.61,
    //         "genres": [
    //             "Shooter",
    //             "Puzzle"
    //         ]
    //     },
    //     {
    //         "id": 5286,
    //         "name": "Tomb Raider (2013)",
    //         "platforms": [
    //             "PlayStation 4",
    //             "macOS",
    //             "PC",
    //             "Xbox One",
    //             "Xbox 360",
    //             "PlayStation 3",
    //             "PC",
    //             "PlayStation",
    //             "Xbox",
    //             "Apple Macintosh"
    //         ],
    //         "background_image": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
    //         "released": "2013-03-05",
    //         "rating": 4.05,
    //         "genres": [
    //             "Action",
    //             "Adventure"
    //         ]
    //     },
    //     {
    //         "id": 4291,
    //         "name": "Counter-Strike: Global Offensive",
    //         "platforms": [
    //             "PC",
    //             "Xbox 360",
    //             "PlayStation 3",
    //             "PC",
    //             "PlayStation",
    //             "Xbox"
    //         ],
    //         "background_image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
    //         "released": "2012-08-21",
    //         "rating": 3.57,
    //         "genres": [
    //             "Action",
    //             "Shooter"
    //         ]
    //     },
    //     {
    //         "id": 13536,
    //         "name": "Portal",
    //         "platforms": [
    //             "Android",
    //             "PlayStation 3",
    //             "Xbox 360",
    //             "Linux",
    //             "macOS",
    //             "PC",
    //             "Nintendo Switch",
    //             "PC",
    //             "PlayStation",
    //             "Xbox",
    //             "Android",
    //             "Apple Macintosh",
    //             "Linux",
    //             "Nintendo"
    //         ],
    //         "background_image": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
    //         "released": "2007-10-09",
    //         "rating": 4.51,
    //         "genres": [
    //             "Adventure",
    //             "Puzzle"
    //         ]
    //     },
    //     {
    //         "id": 12020,
    //         "name": "Left 4 Dead 2",
    //         "platforms": [
    //             "macOS",
    //             "Linux",
    //             "PC",
    //             "Xbox 360",
    //             "PC",
    //             "Xbox",
    //             "Apple Macintosh",
    //             "Linux"
    //         ],
    //         "background_image": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
    //         "released": "2009-11-17",
    //         "rating": 4.09,
    //         "genres": [
    //             "Action",
    //             "Shooter"
    //         ]
    //     },
    //     {
    //         "id": 5679,
    //         "name": "The Elder Scrolls V: Skyrim",
    //         "platforms": [
    //             "PC",
    //             "Nintendo Switch",
    //             "Xbox 360",
    //             "PlayStation 3",
    //             "PC",
    //             "PlayStation",
    //             "Xbox",
    //             "Nintendo"
    //         ],
    //         "background_image": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
    //         "released": "2011-11-11",
    //         "rating": 4.42,
    //         "genres": [
    //             "Action",
    //             "RPG"
    //         ]
    //     },
    //     {
    //         "id": 4062,
    //         "name": "BioShock Infinite",
    //         "platforms": [
    //             "PlayStation 4",
    //             "Xbox 360",
    //             "Nintendo Switch",
    //             "Linux",
    //             "PC",
    //             "PlayStation 3",
    //             "Xbox One",
    //             "PC",
    //             "PlayStation",
    //             "Xbox",
    //             "Linux",
    //             "Nintendo"
    //         ],
    //         "background_image": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
    //         "released": "2013-03-26",
    //         "rating": 4.38,
    //         "genres": [
    //             "Action",
    //             "Shooter"
    //         ]
    //     },
    //     {
    //         "id": 28,
    //         "name": "Red Dead Redemption 2",
    //         "platforms": [
    //             "PC",
    //             "PlayStation 4",
    //             "Xbox One",
    //             "PC",
    //             "PlayStation",
    //             "Xbox"
    //         ],
    //         "background_image": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
    //         "released": "2018-10-26",
    //         "rating": 4.59,
    //         "genres": [
    //             "Action",
    //             "Adventure"
    //         ]
    //     },
    //     {
    //         "id": 3439,
    //         "name": "Life is Strange",
    //         "platforms": [
    //             "PC",
    //             "Linux",
    //             "PlayStation 3",
    //             "macOS",
    //             "iOS",
    //             "Xbox 360",
    //             "Android",
    //             "PlayStation 4",
    //             "Xbox One",
    //             "PC",
    //             "PlayStation",
    //             "Xbox",
    //             "iOS",
    //             "Android",
    //             "Apple Macintosh",
    //             "Linux"
    //         ],
    //         "background_image": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
    //         "released": "2015-01-29",
    //         "rating": 4.11,
    //         "genres": [
    //             "Adventure"
    //         ]
    //     },
    //     {
    //         "id": 802,
    //         "name": "Borderlands 2",
    //         "platforms": [
    //             "PlayStation 3",
    //             "macOS",
    //             "PC",
    //             "Android",
    //             "Linux",
    //             "PS Vita",
    //             "Xbox 360",
    //             "PC",
    //             "PlayStation",
    //             "Xbox",
    //             "Android",
    //             "Apple Macintosh",
    //             "Linux"
    //         ],
    //         "background_image": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
    //         "released": "2012-09-18",
    //         "rating": 4.02,
    //         "genres": [
    //             "Action",
    //             "Shooter",
    //             "RPG"
    //         ]
    //     },
    //     {
    //         "id": 13537,
    //         "name": "Half-Life 2",
    //         "platforms": [
    //             "PC",
    //             "macOS",
    //             "Xbox 360",
    //             "Linux",
    //             "Xbox",
    //             "Android",
    //             "PC",
    //             "Xbox",
    //             "Android",
    //             "Apple Macintosh",
    //             "Linux"
    //         ],
    //         "background_image": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
    //         "released": "2004-11-16",
    //         "rating": 4.49,
    //         "genres": [
    //             "Action",
    //             "Shooter"
    //         ]
    //     },
    //     {
    //         "id": 4286,
    //         "name": "BioShock",
    //         "platforms": [
    //             "PlayStation 3",
    //             "macOS",
    //             "PC",
    //             "Xbox 360",
    //             "PC",
    //             "PlayStation",
    //             "Xbox",
    //             "Apple Macintosh"
    //         ],
    //         "background_image": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
    //         "released": "2007-08-21",
    //         "rating": 4.36,
    //         "genres": [
    //             "Action",
    //             "Shooter"
    //         ]
    //     },
    //     {
    //         "id": 1030,
    //         "name": "Limbo",
    //         "platforms": [
    //             "Linux",
    //             "PS Vita",
    //             "Android",
    //             "Xbox One",
    //             "Nintendo Switch",
    //             "iOS",
    //             "PC",
    //             "macOS",
    //             "Xbox 360",
    //             "PlayStation 3",
    //             "PlayStation 4",
    //             "PC",
    //             "PlayStation",
    //             "Xbox",
    //             "iOS",
    //             "Android",
    //             "Apple Macintosh",
    //             "Linux",
    //             "Nintendo"
    //         ],
    //         "background_image": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
    //         "released": "2010-07-21",
    //         "rating": 4.15,
    //         "genres": [
    //             "Adventure",
    //             "Indie",
    //             "Puzzle",
    //             "Platformer"
    //         ]
    //     },
    //     {
    //         "id": 32,
    //         "name": "Destiny 2",
    //         "platforms": [
    //             "Xbox One",
    //             "PC",
    //             "PlayStation 4",
    //             "Web",
    //             "Xbox Series S/X",
    //             "PlayStation 5",
    //             "PC",
    //             "PlayStation",
    //             "Xbox",
    //             "Web"
    //         ],
    //         "background_image": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
    //         "released": "2017-09-06",
    //         "rating": 3.55,
    //         "genres": [
    //             "Action",
    //             "Shooter",
    //             "Adventure",
    //             "Massively Multiplayer"
    //         ]
    //     },
    //     {
    //         "id": 58175,
    //         "name": "God of War (2018)",
    //         "platforms": [
    //             "PC",
    //             "PlayStation 4",
    //             "PC",
    //             "PlayStation"
    //         ],
    //         "background_image": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
    //         "released": "2018-04-20",
    //         "rating": 4.58,
    //         "genres": [
    //             "Action",
    //             "Adventure",
    //             "RPG"
    //         ]
    //     },
    //     {
    //         "id": 3070,
    //         "name": "Fallout 4",
    //         "platforms": [
    //             "Xbox One",
    //             "PC",
    //             "PlayStation 4",
    //             "PC",
    //             "PlayStation",
    //             "Xbox"
    //         ],
    //         "background_image": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
    //         "released": "2015-11-09",
    //         "rating": 3.8,
    //         "genres": [
    //             "Action",
    //             "RPG"
    //         ]
    //     },
    //     {
    //         "id": 2454,
    //         "name": "DOOM (2016)",
    //         "platforms": [
    //             "Xbox One",
    //             "PC",
    //             "Nintendo Switch",
    //             "PlayStation 4",
    //             "PC",
    //             "PlayStation",
    //             "Xbox",
    //             "Nintendo"
    //         ],
    //         "background_image": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg",
    //         "released": "2016-05-13",
    //         "rating": 4.38,
    //         "genres": [
    //             "Action",
    //             "Shooter"
    //         ]
    //     },
    //     {
    //         "id": 11859,
    //         "name": "Team Fortress 2",
    //         "platforms": [
    //             "PC",
    //             "macOS",
    //             "Linux",
    //             "PC",
    //             "Apple Macintosh",
    //             "Linux"
    //         ],
    //         "background_image": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
    //         "released": "2007-10-10",
    //         "rating": 3.67,
    //         "genres": [
    //             "Action",
    //             "Shooter"
    //         ]
    //     }
    // ]

    return(
        <div className={style.container}>
            {videogames && videogames.map(videogame=>{
                return <Card
                name={videogame.name}
                genres={videogame.genres}
                image={videogame.background_image}                
                />
            })}
        </div>
    )
};

export default Cards;


/*
id={videogame.id}
                name={videogame.name}
                platforms={videogame.platforms}
                image={videogame.background_image}
                released={videogame.released}
                rating={videogame.rating}
                genres={videogame.genres}
*/

