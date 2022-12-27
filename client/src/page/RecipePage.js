import React, {useContext, useEffect, useState} from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {fetchOneRecipe, fetchRecipes} from "../http/recipeAPI";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const RecipePage = () => {
    const [recipe,setRecipe] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneRecipe(id).then(data => setRecipe(data))
    },[])

    return (
        <div>
            <section className="section">
                <div className="container">
                    <div className="menu__header">
                        <h2 className="section__title">{recipe.name}</h2>
                        <h3 className="section__subtitle mt-3">Смачного!</h3>
                    </div>
                    <div className="recipes">
                        <div className="recipes__item">
                            <div className="products__img recipes--img">
                                <Image width={440} src={process.env.REACT_APP_API_URL + recipe.image}/>
                            </div>
                        </div>
                        <div className="recipes__item">
                            <p className="ingredients__title"><strong>Інгредієнти</strong></p>
                            <ul className="ingredients">
                                {recipe.info.map(info =>
                                    <li key={info.id} >
                                        {info.description}
                                    </li>
                                )}
                            </ul>
                            <div className="info_for_recipe">
                            <div>
                                <label >Порції: {recipe.servings}</label>
                            </div>
                            <div>
                                <label >Калорійність: {recipe.calories}</label>

                            </div>
                            <div>
                                <label >Час приготування: {recipe.time}</label>
                            </div>


                            </div>



                            <div className="recipes__text">
                                <p>{recipe.recipeText}</p>
                            </div>
                            <hr className="recipes__hr"/>
                            <div className="quote recipes--quote">Bon appetit!</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default RecipePage;