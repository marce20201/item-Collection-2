import React from 'react'
import {Form} from 'react-bootstrap'
import './Contacto.css'

function Contacto() {
    const handleSubm = (e)=>{
        e.preventDefault();
    }
    return (
        <>
        <h2>Envianos tus dudas!</h2>
        <div className="formulario">
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text"  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form> 
            
        </div>
        <button type="button" className="btn-enviar" onClick={handleSubm}>Enviar</button>
        </>
    )}
export default Contacto
