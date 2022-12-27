import Admin from "./page/Admin";
import {ADMIN_ROUTE, HOME_ROUTE, LOGIN_ROUTE, RECIPE_ROUTE, RECIPES_ROUTE, REGISTRATION_ROUTE} from "./utils/consts";
import RecipePage from "./page/RecipePage";
import Auth from "./page/Auth";
import MainPage from "./page/MainPage";
import HomePage from "./page/HomePage";


// export const authRoutes = [
//     {
//         path: ADMIN_ROUTE,
//         Component: <Admin/>
//     }
// ]

export const publicRoutes = [
    {
        path: RECIPES_ROUTE,
        Component: <MainPage/>
    },
    {
        path: LOGIN_ROUTE,
        Component: <Auth/>
    },
    {
        path: REGISTRATION_ROUTE,
        Component: <Auth/>
    },
    {
        path: RECIPE_ROUTE + '/:id',
        Component: <RecipePage/>
    },
    {
        path: ADMIN_ROUTE,
        Component: <Admin/>
    },
    {
        path: HOME_ROUTE,
        Component: <HomePage/>
    }

]