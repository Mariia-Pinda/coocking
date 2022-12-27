import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {RECIPE_ROUTE} from "../utils/consts";

const RecipeItem = ({recipe}) => {
    const navigate = useNavigate()

    return (
        <div className='recipes__menu__item m-lg-3' onClick={() => navigate(RECIPE_ROUTE + '/' + recipe.id)}>
            <div className='recipes__menu__img' style={{width: 300,height:300}} >
                <div >
                <Image width={300} height={300} src={process.env.REACT_APP_API_URL + recipe.image}/>
                </div>
                <div className='products__text'>{recipe.name}</div>
            </div>
         </div>
    );
};

export default RecipeItem;