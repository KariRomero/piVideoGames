const validate = (form) => {
    const errors = {};
    
    if(!form.name){
        errors.name = 'Complete name'
    }else if(!/^[a-zA-Z0-9-() .]+$/.test(form.name)){
        errors.name = 'Only letters, numbers, - and ()'
    }else if(form.name.length<5){
        errors.name = 'Must have more than 5 characters'
    }
    if(!form.description){
        errors.description = 'Complete description'
    }
    // if(!form.platforms){
    //     errors.platforms = 'Complete platforms'
    // }
    // if(!form.image){
    //     errors.image = 'Complete image'
    // }
    if(!form.released){
        errors.released = 'Complete released'
    }
    if(!form.rating){
        errors.rating = 'Complete rating'
    }
    // if(!form.genre){
    //     errors.genre = 'Complete genre'
    // }
    if(!form.description){
        errors.description = 'Complete description'
    }
    if (isNaN(form.rating) || form.rating < 0 || form.rating > 5) {
        errors.rating = 'The rating must be in the range of 0 to 5'
    }    
    return errors;
};

export default validate;