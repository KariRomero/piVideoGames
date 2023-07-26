import style from './Form.module.css';
import { useState } from "react";
import axios from 'axios';

const Form = () => {

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
    }

    const validate = (form) => {

    }

    const submitHandler = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3001/videogames', form)
        .then(res=>alert(res))
        .catch(err=>alert(err))                      // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<     VER
    }

    return(
        <div className={style.background}>
        <form onSubmit={submitHandler} className={style.form}>
            <div>
                <label>Nombre</label>
                <input type="text" value={form.name} onChange={changeHandler} name='name'/>
            </div>

            <div>
                <label>Imagen</label>
                <input type="text" value={form.image} onChange={changeHandler} name='image'/>
            </div>

            <div>
                <label>Descripcion</label>
                <input type="text" value={form.description} onChange={changeHandler} name='description'/>
            </div>

            <div>
                <label>Plataformas</label>
                <input type="text" value={form.platforms} onChange={changeHandler} name='platforms'/>
            </div>

            <div>
                <label>Fecha de lanzamiento</label>
                <input type="text" value={form.released} onChange={changeHandler} name='released'/>
            </div>

            <div>
                <label>Rating</label>
                <input type="text" value={form.rating} onChange={changeHandler} name='rating'/>
            </div>

            <div>
                <label>Generos</label>
                <input type="text" value={form.genre} onChange={changeHandler} name='genre'/>
            </div>

            <button type="submit">New Game</button>
           
        </form>
        </div>
    )
};

export default Form;
