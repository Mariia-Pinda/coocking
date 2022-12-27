import React, {useContext} from 'react';
import {Routes, Route} from "react-router-dom";
import {publicRoutes} from "../routes";
import {Context} from "../index";
import Auth from "../page/Auth";
import '../components/assets/css/style.css'


const AppRouter = () => {
    const {user} = useContext(Context)

    console.log(user)
    return (
        <div>
        <Routes>
            {user.isAuth && publicRoutes.map(({path, Component}) =>
                <Route   path={'/login'}  element={<Auth/>} />
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path}    path={path}    element={Component} />
            )}
        </Routes>
        </div>
    );
};

export default AppRouter;