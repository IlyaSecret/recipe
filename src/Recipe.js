import React from 'react';
import style from './recipe.module.css'

const Recipe = ({title, calories, image, ingredients}) => {

    return(
        <div className={style.recipe}>
            <h1 className={style.title}>{title}</h1>
            <ol className={style.ingredients}>
                Ингридиенты:<br></br>
                {
                    ingredients.map((ingredient) =>(
                        <li>{ingredient.text}</li>
                    ))
                }
            </ol>
            <p>Калории: {calories}</p>
            <img src={image} alt=''></img>
        </div>
    );

}
export default Recipe;