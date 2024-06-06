import style from './Form.module.css';
import { useState } from "react";
import { useSelector } from 'react-redux';
import validate from './validate';
import { getGenres, createVideogame } from '../../redux/actions';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";


const Form = () => {

    const allGenres = useSelector((state) => state.allGenres);    
    const allVideogames = useSelector((state) => state.videogames)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(()=>{
        dispatch(getGenres())        
    },[dispatch])

    const randomPlatforms = [
            "PlayStation 5",
			"PlayStation 4",
			"PC",
			"PlayStation 3",
			"Xbox 360",
			"Xbox One",
			"Xbox",
            "Nintendo",
            "iOS",
            "Android",
            "SEGA"
    ];

    const [form, setForm] = useState({
        name:'',
        description:'',
        platforms:[],
        released:'',        
        rating:'',
        genres:[],
        image:''
    })

    const [errors, setErrors] = useState({
        name:'',
        description:'',
        platforms:[],
        released:'',        
        rating:'',
        genres:[],    
        image:''    
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const exist = allVideogames.find(n=>n.name === form.name)
        if (exist){
            alert('That videogame already exists!')
        } else {
            dispatch(createVideogame(form));
            
            setForm({
                name:'',
                description:'',
                platforms:[],
                released:'',
                rating: 0,
                genres:[],                
                });
                alert('Videogame created!')
        }
        navigate('/')
    };

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setForm({
            ...form,
            [property]:value
        })
        setErrors(validate({
            ...form,
            [property]: value,
        }))
        console.log(form.released);
    };

    const handleGenres = (e) => {
        if(!form.genres.includes(e.target.value)){
            setForm({
                ...form,
                genres:[...form.genres, e.target.value]
            })
        }
    };

    const handlePlatforms = (e) => {
        if(!form.platforms.includes(e.target.value)){
            setForm({
                ...form,
                platforms:[...form.platforms, e.target.value]
            })
        }
    };

    const handleDeleteG = (e) => {
        setForm({
            ...form,
            genres: form.genres.filter((gen) => gen !== e)
        })
    };

    const handleDeleteP = (e) => {
        setForm({
            ...form,
            platforms: form.platforms.includes((plat)=> plat !== e)
        })
    };    

    const emptyErrors = Object.keys(errors).length===0; //tomo las propoiedades de errors y las introduzco en unn array para aplicar.length

    return(
            <form 
            onSubmit={(e) => handleSubmit(e)} 
            className={style.form}>   
            
            {/* <div>
                <div>
                    <Link to='/'>
                        <button className={style.button}>
                            <FaArrowLeft/>
                        </button>
                    </Link>
                </div>

                <div className={style.title}> 
                    <h2>CREATE YOUR VIDEOGAME</h2>
                </div>

            </div> */}

                <div className={style.fullcont}>
                    <div className={style.col}>                        
                        <div className={style.cont}>
                            <label className={style.label}>Name:</label>
                            <input 
                            placeholder='write videogame name...' 
                            type="text" 
                            value={form.name} 
                            onChange={(e)=>handleChange(e)} 
                            name='name' 
                            className={style.input}/>
                            {errors.name 
                            && <p className={style.errors}>{errors.name}</p>}
                        </div>

                        <div className={style.cont}>
                            <label className={style.label}>Released:</label>
                            <input 
                            type="date" 
                            value={form.released} 
                            onChange={(e)=>handleChange(e)} 
                            name='released' 
                            className={style.input}/>
                            {errors.released 
                            && <p className={style.errors}>{errors.released}</p>}
                        </div>
                        
                        <div className={style.cont}>
                            <label className={style.label}>Rating:</label>
                            <input 
                            placeholder='write videogame rating...' 
                            type="number" step=".1" 
                            value={form.rating} 
                            onChange={(e)=>handleChange(e)} 
                            name='rating' 
                            className={style.input}/>
                            {errors.rating 
                            && <p className={style.errors}>{errors.rating}</p>}
                        </div>                    

                        <div className={style.cont}>
                            <label  className={style.label}>Image URL:</label>
                            <input 
                            type='text' 
                            value={form.image} 
                            onChange={(e)=>handleChange(e)} 
                            name='image' 
                            className={style.input}/>                
                        </div>
                        
                        <div className={style.cont}>
                            <label className={style.label}>Description:</label>
                            <textarea 
                            placeholder='write videogame description...' 
                            type="text" 
                            value={form.description} 
                            onChange={handleChange} 
                            name='description' 
                            className={style.input}/>
                            {errors.description 
                            && <p className={style.errors}>{errors.description}</p>}
                        </div>

                        

                    </div>

                    <div className={style.col}>
                        <div className={style.cont}>
                            <select 
                            className={style.select} 
                            id='genres' 
                            defaultValue='' 
                            onChange={(e)=>handleGenres(e)}>
                                <option 
                                className={style.option} 
                                value='' 
                                disabled hidden>
                                    Choose your genres...
                                </option>
                                {allGenres.map((g)=>{
                                    return(
                                        <option 
                                        className={style.option} 
                                        key={g.id} 
                                        value={g.name}>{g.name}
                                        </option>
                                    )
                                })                        
                            }
                            </select>
                            {form.genres.map((g)=>(
                                <div className={style.boxopcion}>
                                    <div className={style.buttonTitle}>
                                        <div>{g}</div>
                                        <button 
                                        className={style.button} 
                                        onClick={()=>handleDeleteG(g)} 
                                        value={g} 
                                        key={g}>
                                            <span className={style.x}>X</span>
                                        </button>                                     

                                    </div>
                                </div>
                                ))                    
                            }
                            {errors.genres 
                            && <p className={style.errors}>{errors.genres}</p>} 
                        </div>
                            {emptyErrors 
                            && <button type="submit" className={style.button1}>
                                New Game </button>}
                    </div>
                    <div className={style.col}>
                        <div className={style.cont}>
                            <select 
                            className={style.select} 
                            id='platforms' 
                            defaultValue='' 
                            onChange={(e)=>handlePlatforms(e)}>
                                <option 
                                className={style.option} 
                                value='' 
                                disabled hidden>
                                    Choose your platforms...
                                </option>
                                {randomPlatforms.map((p)=>{
                                    return(
                                        <option 
                                        className={style.option} 
                                        value={p} 
                                        key={p} > {p}</option>
                                    )
                                })                        
                            }
                            </select>
                            {form.platforms.map((p)=> (
                                <div className={style.boxopcion}>
                                    <div className={style.buttonTitle}>
                                        <div>{p}</div>
                                        <button 
                                        className={style.button} 
                                        onClick={() => handleDeleteP(p)} 
                                        key={p} 
                                        value={p}>
                                            <span className={style.x}>X</span>
                                        </button>

                                    </div>
                                </div>
                                )) 
                            }
                        </div>
                    </div>

                </div>

            
            </form>
    )
};

export default Form;
