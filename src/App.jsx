
import './App.css'


function App() {


  return (
    <>
      <div className='principal'>
        <div className='left-side-bar'></div>
        <div className='main-form'>
          <div className='main-form-v'>
            <div className='cardholder'>
              <label htmlFor="" className='etiqueta'>CARDHOLDER NAME</label>
              <input type="text" placeholder='e.g. Jane Appleseed' className='caja'/>
            </div>
            <div className='cardnumber'>
              <label htmlFor="" className='etiqueta'>CARD NUMBER</label>
              <input type="number" placeholder='e.g. 1234 5678 9123 0000' className='caja'/>
            </div>
          </div>
          <div className='main-form-h'>
            <div className='exp'>
              <label htmlFor="" className='etiqueta'>EXP. DATE (MM/YY)</label>
              <div className='expdate'>
                <input type="number" placeholder='MM' className='caja mesdia'/>
                <input type="number" placeholder='YY' className='caja mesdia'/>
              </div>
            </div>
            <div className='cvc'>
              <label htmlFor="" className='etiqueta'>CVC</label>
              <input type="number" placeholder='e.g. 123' className='caja'/>
            </div>
          </div>
            <button className='btn-confirm'>Confirm</button>
        </div>
        <div className='card'>
            <div className='card-front'></div>
            <div className='card-back'></div>
        </div>
      </div>
      
    </>
  )
}

export default App
