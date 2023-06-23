import completeIcon from '../assets/images/icon-complete.svg'
import '../styles/Thanks.css'

function Thanks( {setNext} ) {
  return (
    <div className='thanks'>
      <img src={completeIcon} alt="" />
      <h2>THANK YOU!</h2>
      <p>We've added your card details</p>
      <button className='btn-confirm btn-thanks' onClick={()=>setNext(false)}>Continue</button>
    </div>
  )
}

export default Thanks