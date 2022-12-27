import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserStore from "./store/UserStore";
import RecipeStore from "./store/RecipeStore";
import ParamsStore from "./store/ParamsStore";

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        user: new UserStore(),
        recipe: new RecipeStore(),
        params: new ParamsStore(),
    }}>
    <App />
    </Context.Provider>
);


reportWebVitals();
