
import './App.css'

function App() {


  return (
    <>
      <div className='principal'>
        <div className='left-side-bar'></div>
        <div className='main-form-v'>
          <div className='cardholder'>
            <label htmlFor="">CARDHOLDER NAME</label>
            <input type="text" placeholder='e.g. Jane Appleseed'/>
          </div>
          <div className='cardnumber'>
            <label htmlFor="">CARD NUMBER</label>
            <input type="number" placeholder='e.g. 1234 5678 9123 0000' />
          </div>
        </div>
        <div className='main-form-h'>
          <div className='exp'>
            <label htmlFor="">EXP. DATE (MM/YY)</label>
            <input type="number" placeholder='MM'/>
            <input type="number" placeholder='YY'/>
          </div>
          <div className='cvc'>
            <label htmlFor="">CVC</label>
            <input type="number" placeholder='e.g. 123'/>
          </div>
        </div>
      </div>
     
    </>
  )
}

export default App
