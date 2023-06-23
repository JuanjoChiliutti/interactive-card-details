import React from 'react';
import { useEffect, useRef, useState } from 'react'

function MainForm({ input, setInput, setNext }) {

    const [errors, setErrors] = useState({
        nombre: '',
        numero: '',
        mes: '',
        ano: '',
        cvc: ''
    })

    const submitButtonRef = useRef(null);

    useEffect(() => {
        const formIsValid = Object.values(errors).every((error) => error === '') &&
            Object.values(input).every((value) => value !== '');
        submitButtonRef.current.disabled = !formIsValid;
    }, [errors, input]);

    function validErrors(name, value) {
        let error = ''
        let currentYear = new Date().getFullYear().toString().slice(-2);

        switch (name) {
            case 'nombre':
                if (!/^[a-zA-Z ]+$/.test(value)) {
                    error = 'Debe contener solo letras y espacios'
                }
                break
            case 'numero':
                if (!/^[0-9]{16}$/.test(value)) {
                    error = 'Debe tener 16 dígitos numéricos'
                }
                break
            case 'mes':
                if (value < 1 || value > 12 || !/^[0-9]{2}$/.test(value)) {
                    error = 'Debe ser un mes válido (entre 1 y 12)'
                }
                break
            case 'ano':
                if (value < currentYear) {
                    error = 'Debe ser un año válido'
                }
                break
            case 'cvc':
                if (!/^[0-9]{3}$/.test(value)) {
                    error = 'Debe tener 3 dígitos numéricos'
                }
                break
            default:
                break
        }

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: error
        }))
    }

    function handleChange(event) {
        event.preventDefault();

        const { name, value } = event.target;
        if (name === 'cvc' && !/^[0-9]{0,3}$/.test(value)) {
            return;
        }
        if (name === 'numero' && !/^[0-9]*$/.test(value)) {
            return;
        }
        if (name === 'nombre' && !/^[A-Za-z ]*$/.test(value)) {
            return;
        }
        if (name === 'mes' && !/^[0-9]*$/.test(value)) {
            return;
        }
        if (name === 'ano' && !/^[0-9]*$/.test(value)) {
            return;
        }
        validErrors(name, value);

        setInput((prevState) => ({
            ...prevState,
            [name]: value.toUpperCase(),
        }));
    }



    return (
        <>
            <div className='main-form'>
                <div className='main-form-v'>
                    <div className='cardholder'>
                        <label htmlFor='' className='etiqueta'>
                            CARDHOLDER NAME
                        </label>
                        <input
                            type='text'
                            name='nombre'
                            onChange={handleChange}
                            placeholder='e.g. Jane Appleseed'
                            className={errors.nombre ? 'errorstyle caja' : 'caja'}
                            value={input.nombre}
                        />
                        {errors.nombre && <span>{errors.nombre}</span>}
                    </div>
                    <div className='cardnumber'>
                        <label htmlFor='' className='etiqueta'>
                            CARD NUMBER
                        </label>
                        <input
                            type='text'
                            maxLength={16}
                            pattern='^[0-9]+$'
                            onChange={handleChange}
                            name='numero'
                            placeholder='e.g. 1234 5678 9123 0000'
                            className={errors.numero ? 'errorstyle caja' : 'caja'}
                            value={input.numero}
                        />
                        {errors.numero && <span>{errors.numero}</span>}
                    </div>
                </div>
                <div className='main-form-h'>
                    <div className='exp'>
                        <label htmlFor='' className='etiqueta'>
                            EXP. DATE (MM/YY)
                        </label>
                        <div className='expdate'>
                            <input
                                type='text'
                                maxLength={2}
                                name='mes'
                                onChange={handleChange}
                                placeholder='MM'
                                className={errors.mes ? 'errorstyle caja mesdia' : 'caja mesdia'}
                                value={input.mes}
                            />
                            <input
                                type='text'
                                maxLength={2}
                                name='ano'
                                onChange={handleChange}
                                placeholder='YY'
                                className={errors.ano ? 'errorstyle caja mesdia' : 'caja mesdia'}
                                value={input.ano}
                            />
                        </div>
                        {errors.mes && <span>{errors.mes}</span>}
                        {errors.ano && <span>{errors.ano}</span>}
                    </div>
                    <div className='cvc'>
                        <label htmlFor='' className='etiqueta'>
                            CVC
                        </label>
                        <input
                            type='text'
                            maxLength={3}
                            pattern='^[0-9]+$'
                            onChange={handleChange}
                            name='cvc'
                            placeholder='e.g. 123'
                            className={errors.cvc ? 'errorstyle caja' : 'caja'}
                            value={input.cvc}
                        />
                        {errors.cvc && <span>{errors.cvc}</span>}
                    </div>
                </div>
                <button ref={submitButtonRef} className='btn-confirm' onClick={() => setNext(true)} >Confirm</button>
            </div>
        </>

    )
}

export default MainForm