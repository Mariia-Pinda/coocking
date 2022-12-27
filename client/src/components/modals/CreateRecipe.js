import React, {useContext, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {createRecipe} from "../../http/recipeAPI";

const CreateRecipe = observer(({show,onHide}) => {
    const {recipe} = useContext(Context)
    const [recipeText,setRecipeText] = useState('')
    const [name,setName] = useState('')
    const [servings,setServings] = useState(0)
    const [type,setType] = useState(1)
    const [time,setTime] = useState('')
    const [calories,setCalories] = useState(0)
    const [info,setInfo] = useState([])
    const [file,setFile] = useState(null)

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addInfo = () => {
        setInfo([...info, {description: '', number: Date.now()}])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i,[key]:value} : i))
    }

    const addRecipe = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('recipeText', recipeText)
        formData.append('servings', `${servings}`)
        formData.append('type', `${type}`)
        formData.append('calories', `${calories}`)
        formData.append('time', time)
        formData.append('image', file)
        formData.append('info', JSON.stringify(info))
        createRecipe(formData).then(data => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id='contained-modal-title-vcenter'>
                    Додати рецепт
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className='mt-3'
                        placeholder='Введіть назву рецепту'
                    />
                    <Form.Control
                        value={recipeText}
                        onChange={e => setRecipeText(e.target.value)}
                        className='mt-3'
                        placeholder='Введіть спосіб приготування'
                    />
                    <div className='mt-3'>Введіть кількість порцій</div>
                    <Form.Control
                        value={servings}
                        onChange={e => setServings(Number(e.target.value))}
                        className='mt-3'
                        // placeholder='Введите порционность'
                        type='number'
                    />
                    <div className='mt-3'>1(сніданок), 2(обід), 3(вечеря)</div>
                    <Form.Control
                        value={type}
                        onChange={e => setType(Number(e.target.value))}
                        className='mt-3'
                        // placeholder='Введите тип'
                        type='number'
                    />
                    <Form.Control
                        value={time}
                        onChange={e => setTime(e.target.value)}
                        className='mt-3'
                        placeholder='Введіть час приготування'
                    />
                    <div className='mt-3'>Введіть калорійність</div>
                    <Form.Control
                        value={calories}
                        onChange={e => setCalories(Number(e.target.value))}
                        className='mt-3'
                        // placeholder='Введите калорийность'
                        type='number'
                    />
                    <Form.Control
                        className='mt-3'
                        onChange={selectFile}
                        type='file'
                    />
                    <hr/>
                    <Button
                        variant='outline-dark'
                        onClick={addInfo}
                    >
                        Додати інгредієнти
                    </Button>
                    {info.map(i =>
                            <Row className='mt-3' key={i.number}>
                                <Col md={4}>
                                    <Form.Control
                                        onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                        value={i.description}
                                        placeholder='Введіть інгредієнт'
                                    />
                                </Col>
                                <Col md={4}>
                                    <Button variant='outline-danger' onClick={() => removeInfo(i.number)}>Видалити</Button>
                                </Col>
                            </Row>
                        )}
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-success' onClick={addRecipe}>Додати</Button>
                <Button variant='outline-danger' onClick={onHide}>Закрити</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateRecipe;