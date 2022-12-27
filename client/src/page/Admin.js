import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateRecipe from "../components/modals/CreateRecipe";
import {set} from "mobx";

const Admin = () => {
    const [recipeVisible, setRecipeVisible] = useState(false)

    return (
        <Container className='d-flex flex-column'>
            <Button variant={'outline-dark'} className='mt-3' onClick={() => setRecipeVisible(true)}>Додати рецепт</Button>
            <CreateRecipe show={recipeVisible} onHide={() => setRecipeVisible(false)}/>
        </Container>
    );
};

export default Admin;