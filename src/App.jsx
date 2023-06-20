
import './App.css'
import { useState } from 'react'


function App() {
  const [input, setInput] = useState({
    nombre: 'JANE APPLESSED',
    numero: '0000 0000 0000 0000',
    mes: '00',
    ano: '00',
    cvc: '000'
  })
  
  function handleChange(event) {
    event.preventDefault();
    setInput(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value.toUpperCase()
    }));
  }

  return (
    <>
      <div className='principal'>
        <div className='left-side-bar'></div>
        <div className='main-form'>
          <div className='main-form-v'>
            <div className='cardholder'>
              <label htmlFor="" className='etiqueta'>CARDHOLDER NAME</label>
              <input type="text" name='nombre' onChange={handleChange} placeholder='e.g. Jane Appleseed' className='caja' />
            </div>
            <div className='cardnumber'>
              <label htmlFor="" className='etiqueta'>CARD NUMBER</label>
              <input type="number" onChange={handleChange} name='numero' placeholder='e.g. 1234 5678 9123 0000' className='caja' />
            </div>
          </div>
          <div className='main-form-h'>
            <div className='exp'>
              <label htmlFor="" className='etiqueta'>EXP. DATE (MM/YY)</label>
              <div className='expdate'>
                <input type="number" name='mes' onChange={handleChange} placeholder='MM' className='caja mesdia' />
                <input type="number" name='ano' onChange={handleChange} placeholder='YY' className='caja mesdia' />
              </div>
            </div>
            <div className='cvc'>
              <label htmlFor="" className='etiqueta'>CVC</label>
              <input type="number" onChange={handleChange} name='cvc' placeholder='e.g. 123' className='caja' />
            </div>
          </div>
          <button className='btn-confirm'>Confirm</button>
        </div>
        
          <div className='card-front'>
            <div className='contenedor-imagen'>
            </div>
            <div className='contenedor-numero'>
              <p className='nroTarjeta'>{input.numero}</p>
            </div>
            <div className='enlinea'>
              <span className='nombre datos'>{input.nombre}</span><span className='exp datos'>{input.mes}/{input.ano}</span>
            </div>
          </div>
          <div className='card-back'>
            <div className='nrocvc datos'>
              <p>{input.cvc}</p>
            </div>
          </div>
        
      </div>

    </>
  )
}

export default App
