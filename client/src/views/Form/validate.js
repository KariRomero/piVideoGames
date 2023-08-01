const validate = (form) => {
    const errors = {};
    
    if(!form.name){
        errors.name = 'Debe completar name'
    }else if(!/^[a-zA-Z0-9-() .]+$/.test(form.name)){
        errors.name = 'Solo se aceptan letras, numeros, guiones medios y parentesis'
    }else if(form.name.length<5){
        errors.name = 'Debe tener mas de 5 caracteres'
    }
    if(!form.description){
        errors.description = 'Debe completar description'
    }
    // if(!form.platforms){
    //     errors.platforms = 'Debe completar platforms'
    // }
    // if(!form.image){
    //     errors.image = 'Debe completar image'
    // }
    if(!form.released){
        errors.released = 'Debe completar released'
    }
    if(!form.rating){
        errors.rating = 'Debe completar rating'
    }
    // if(!form.genre){
    //     errors.genre = 'Debe completar genre'
    // }
    if(form.description<1000){
        errors.description = 'Puede contener hasta 1000 caracteres'
    }
    if (isNaN(form.rating) || form.rating < 0 || form.rating > 5) {
        errors.rating = 'La calificación debe estar en el rango de 0 a 5'
    }    
    return errors;
};

export default validate;