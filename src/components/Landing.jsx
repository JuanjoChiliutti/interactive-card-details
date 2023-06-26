
import {  useEffect, useRef, useState } from 'react'
import '../styles/Landing.css'
import MainForm from './mainForm'
import Thanks from './Thanks';


function Landing() {
    const [next, setNext] = useState(false);
    const [input, setInput] = useState({
      nombre: '',
      numero: '',
      mes: '',
      ano: '',
      cvc: ''
    });
    const formRef = useRef(null);
    
    
    
  
    return (
        <div className='principal' ref={formRef}>
            <div className='left-side-bar'></div>
            {
                !next ?
                <MainForm input={input} setInput={setInput} setNext={setNext} />
                :
                <Thanks setNext={setNext} setInput={setInput} input={input}/>
            }
            
            
            <div className='card-front'>
                <div className='contenedor-imagen'></div>
                <div className='contenedor-numero'>
                    <p className='nroTarjeta'>{input.numero ? input.numero.replace(/(.{4})/g, '$1 ') : '0000 0000 0000 0000'}</p>
                </div>
                <div className='enlinea'>
                    <span className='nombre datos'>{input.nombre ? input.nombre : 'JANE APPLESSED'}</span>
                    <span className='exp datos'>{input.mes ? input.mes : '00'}/{input.ano ? input.ano : '00'}</span>
                </div>
            </div>
            <div className='card-back'>
                <div className='nrocvc datos'>
                    <p>{input.cvc ? input.cvc : '000'}</p>
                </div>
            </div>
        </div>
    );
}

export default Landing