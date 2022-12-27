import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, Nav, Row} from "react-bootstrap";
import {NavLink,useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, RECIPES_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {registration, login} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    console.log(email)
    console.log(password)

    const click = async () => {
        try{
            let data
            if (isLogin){
                data = await login(email,password)
            }else{
                data = await registration(email,password)
            }
            user.setUser(data)
            user.setIsAuth(true)
            navigate(RECIPES_ROUTE)
        } catch (e){
            return alert(e.response.data.message)
        }
    }

    return (
        <div>
            <div className="log__in__section">
                <div className='container'>
                    <div className='menu__header'>
                        <h2 className="section__title">{isLogin ? 'Авторизація' : 'Реєстрація'}</h2>
                    </div>
                    <div className='log__in'>
                        <Form className="d-flex flex-column">
                            <Form.Control value={email} onChange={e => setEmail(e.target.value)} className="mt-3" placeholder="email" />
                            <Form.Control value={password} onChange={e => setPassword(e.target.value)} type="password" className="mt-3" placeholder="password" />
                            <Row >
                                {isLogin ?
                                    <div style={{paddingTop: 10}}>
                                        Немає акаунта? <NavLink to={REGISTRATION_ROUTE}>Зареєструватись</NavLink>
                                    </div>
                                    :
                                    <div style={{paddingTop: 10}}>
                                        Вже зареєстровані? <NavLink to={LOGIN_ROUTE}>Вхід</NavLink>
                                    </div>
                                }
                            </Row>
                            <Row className='d-flex justify-content-between pl-3 pr-3'>
                                <Button
                                    className=' mt-5'
                                    variant={"outline-dark"}
                                    onClick={click}
                                >
                                    {isLogin ? 'Вхід' : 'Реєстрація'}
                                </Button>
                            </Row>

                        </Form>
                    </div>
                </div>
                {/*<Card style={{width:500}} className="p-5">*/}
                    {/*<h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>*/}
                    {/*<Form className="d-flex flex-column">*/}
                    {/*    <Form.Control value={email} onChange={e => setEmail(e.target.value)} className="mt-2" placeholder="email" />*/}
                    {/*    <Form.Control value={password} onChange={e => setPassword(e.target.value)} type="password" className="mt-2" placeholder="password" />*/}
                    {/*    <Row>*/}
                    {/*        {isLogin ?*/}
                    {/*            <div style={{paddingTop: 10}}>*/}
                    {/*                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрироваться</NavLink>*/}
                    {/*            </div>*/}
                    {/*            :*/}
                    {/*            <div style={{paddingTop: 10}}>*/}
                    {/*                Уже зарегистрированы? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>*/}
                    {/*            </div>*/}
                    {/*        }*/}
                    {/*        <Button onClick={click} className="mt-3 align-self-end">{isLogin ? 'Вход' : 'Регистрация'}</Button>*/}
                    {/*    </Row>*/}
                    {/*</Form>*/}
                {/*</Card>*/}
            </div>
        </div>
    );
});

export default Auth;