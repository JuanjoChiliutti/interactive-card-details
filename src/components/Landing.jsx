
import {  useEffect, useRef, useState } from 'react'
import '../styles/Landing.css'
import MainForm from './MainForm'
import Thanks from './Thanks';
import cardFront from '../assets/images/bg-card-front.png'
import cardBack from '../assets/images/bg-card-back.png'
import cardLogo from '../assets/images/card-logo.svg'
import leftSideBar from '../assets/images/bg-main-desktop.png'


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
            <div className='left-side-bar'><img src={leftSideBar} alt="" /></div>
            {
                !next ?
                <MainForm input={input} setInput={setInput} setNext={setNext} />
                :
                <Thanks setNext={setNext} setInput={setInput} input={input}/>
            }
            
            
            <div className='card-front'>
                <img className='img-tarj' src={cardFront} alt="" />
                <div className='contenedor-imagen'>
                    <img className='card-logo' src={cardLogo} alt="" />
                </div>
                <div className='contenedor-numero'>
                    <p className='nroTarjeta'>{input.numero ? input.numero.replace(/(.{4})/g, '$1 ') : '0000 0000 0000 0000'}</p>
                </div>
                <div className='enlinea'>
                    <span className='nombre datos'>{input.nombre ? input.nombre : 'JANE APPLESSED'}</span>
                    <span className='exp datos'>{input.mes ? input.mes : '00'}/{input.ano ? input.ano : '00'}</span>
                </div>
            </div>
            <div className='card-back'>
                <img className='img-tarj' src={cardBack} alt="" />
                <div className='nrocvc datos'>
                    <p>{input.cvc ? input.cvc : '000'}</p>
                </div>
            </div>
        </div>
    );
}

export default Landing