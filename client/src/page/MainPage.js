import React, {useContext, useEffect} from 'react';
import {Col, Container} from "react-bootstrap";
import RecipesList from "../components/RecipesList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchRecipes} from "../http/recipeAPI";

const MainPage = observer(() => {
    const {recipe} = useContext(Context)

    useEffect(() => {
        fetchRecipes().then(data => recipe.setRecipes(data.rows))
    },[])

    return (
        <div >
        <div className='section'>
            <div className='container'>
                <div className='menu__header'>
                    <h2 className='section__title'>Рецепти</h2>
                    <h3 className="section__subtitle">Нехай їжа буде твоїм ліком, твої ліки будуть тобі їжею</h3>
                    <div className="section__text recipes">
                        <p>Правильне харчування – це обов’язковий пункт здорового способу життя і запорука стабільного функціонування організму в цілому.

                            Щоденний раціон повинен відрізнятися різноманітністю і бути повноцінним. Важлива свіжість продуктів. Слід стежити за об’ємом порцій спожитої їжі.

                            Збалансоване харчування має стати способом життя.</p>
                    </div>
                </div>
            <div className="recipes__menu">
                <RecipesList/>
            </div>
            </div>
        </div>
        </div>
    );
});

export default MainPage;