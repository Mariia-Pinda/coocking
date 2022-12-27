import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import RecipeItem from "./RecipeItem";

const RecipesList = observer(() => {
    const {recipe} = useContext(Context)
    return (
        <div className='wrapper'>
            {recipe.recipes.map(i=>
                <RecipeItem key={i.id} recipe={i}/>
            )}
        </div>
    );
});

export default RecipesList;