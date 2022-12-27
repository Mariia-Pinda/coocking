import React, {useContext} from 'react';
import {Context} from "../index";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Container,Nav,Button} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, HOME_ROUTE, LOGIN_ROUTE, RECIPES_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";

const NavBar = observer(() => {
    const navigate = useNavigate()
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{textDecoration:"none",color:"white"}} to={RECIPES_ROUTE}>Дієтолог</NavLink>
                {user.isAuth ?
                    <Nav  style={{color: "red"}}>
                        <NavLink to='/panel'>
                            <Button onClick={() => navigate(ADMIN_ROUTE)} style={{right: 0}} variant={"outline-light"}>Адмін панель</Button>
                        </NavLink>
                        <NavLink to='/home'>
                            <Button onClick={() => navigate(HOME_ROUTE)} style={{right: 0}} variant={"outline-light"}>Особиста сторінка</Button>
                        </NavLink>
                        <NavLink to='/'>
                            <Button onClick={() => navigate(LOGIN_ROUTE)} style={{right: 0}} variant={"outline-light"}>Вийти</Button>
                        </NavLink>
                    </Nav>
                    :
                    <NavLink to='/login' style={{color: "red"}}>
                        <Button style={{marginLeft:1000}} variant={"outline-light"}>Авторизация</Button>
                    </NavLink>
                }
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;