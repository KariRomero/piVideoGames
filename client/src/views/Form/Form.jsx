import style from './Form.module.css';
import { useState } from "react";
import { useSelector } from 'react-redux';
import axios from 'axios';
import validate from './validate';
import { getGenres } from '../../redux/actions';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Form = () => {

    const allGenres = useSelector((state) => state.allGenres);    
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getGenres())
    },[])

    const randomPlatforms = [
            "PlayStation 5",
			"Xbox Series S/X",
			"PlayStation 4",
			"PC",
			"PlayStation 3",
			"Xbox 360",
			"Xbox One",
			"PC",
			"PlayStation",
			"Xbox",
            "Nintendo"
    ];

    const [form, setForm] = useState({
        name:'',
        description:'',
        platforms:'',
        image:'',
        released:'',
        rating:'',
        genre:'',
    })

    const [errors, setErrors] = useState({
        name:'',
        description:'',
        platforms:'',
        image:'',
        released:'',
        rating:'',
        genre:'',        
    })

    const changeHandler = (event) => {
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
    }

    
    const submitHandler = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3001/videogames', form)
        .then(res=>alert(res))
        .catch(err=>alert(err))                      // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<     VER
    }

    const handleChange = (event) =>{
        const value = Array.from(
            event.target.selectedOptions,
            (option) => option.value
        );
        setForm({
            ...form,
            [event.target.name]: value,
        });
    };

    const emptyErrors = Object.keys(errors).length===0;

    return(
        <div className={style.background}>
        <form onSubmit={submitHandler} className={style.form}>
            <div className={style.cont}>
                <label className={style.label}>Name:</label>
                <input placeholder='write videogame name...' type="text" value={form.name} onChange={changeHandler} name='name' className={style.input}/>
                {errors.name && <p className={style.errors}>{errors.name}</p>}
            </div>

            {/* <div className={style.cont}>
                <label className={style.label}>Image:</label>
                <input type="text" value={form.image} onChange={changeHandler} name='image' className={style.input}/>
                {errors.image && <p className={style.errors}>{errors.image}</p>}
            </div> */}

            <div className={style.cont}>
                <label className={style.label}>Description:</label>
                <input placeholder='write videogame description...' type="text" value={form.description} onChange={changeHandler} name='description' className={style.input}/>
                {errors.description && <p className={style.errors}>{errors.description}</p>}
            </div>

            <div className={style.cont}>
                <label className={style.label}>Realesed:</label>
                <input type="date" value={form.released} onChange={changeHandler} name='released' className={style.input}/>
                {errors.released && <p className={style.errors}>{errors.released}</p>}
            </div>

            <div className={style.cont}>
                <label className={style.label}>Rating:</label>
                <input placeholder='write videogame rating...' type="text" value={form.rating} onChange={changeHandler} name='rating' className={style.input}/>
                {errors.rating && <p className={style.errors}>{errors.rating}</p>}
            </div>

            <div className={style.cont}>
                <label className={style.label}>Platforms:</label>

                <select className={style.select} value={form.platforms} name='platforms' multiple size='5' onChange={handleChange}>
                    {randomPlatforms && randomPlatforms.map((p) => (
                        <option key={p} value={p}>{p}</option>
                    ))}
                </select> 
            </div>

            <div className={style.cont}>
                <label className={style.label}>Generes:</label>

                <select className={style.select} value={form.genre} name='genre' multiple size='5' onChange={handleChange}>
                    {allGenres && allGenres.map((genre) => (
                        <option key={genre.name} value={genre.name}>{genre.name}</option>
                    ))}
                </select>
               
            </div>

            {emptyErrors && <button type="submit" className={style.button}>New Game</button>}
           
        </form>
        </div>
    )
};

export default Form;
