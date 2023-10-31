import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'


function App() {
  const [count, setCount] = useState(0)
  const [val, Setval] = useState(1)
  const [feet,Setfeet] = useState(null)
  const [meter,Setmeter] = useState(null)
  const [liter,Setliter] = useState(null)
  const [gallons,Setgallons] = useState(null)
  const [kilograms,Setkilograms] = useState(null)
  const [pounds,Setpounds] = useState(null)
  console.log(val)

  function convert(){
       Setfeet(val * 3.281) 
     
  }
  useEffect(()=>{
    Setfeet(val * 3.281)
    Setmeter(val * 0.3048)

    Setliter(val * 0.264)
    Setgallons(val * 3.785)

    Setkilograms(val * 2.204)
    Setpounds(val * 0.453)

  },[val])

  return (
    <>
    <div className="container">
      <div className="box">

        <div className="header">
          <h1>Converter</h1>
          <input className="number-input" type="number" value={val} 
          onChange={e => Setval(e.target.value)} />
       
        </div>

        <div className="main">

          <div className="tab">

            <div className="part">
              <h3>Meter</h3>
              <p>
                {val} meters = {feet !== null ? feet.toFixed(3) : 'N/A'} feet 
              </p>
            </div>

            <div className="part">
              <h3>Feet</h3>
              <p>
               {val} feet = {meter !== null ? meter.toFixed(3) : 'N/A'} meters
              </p>
            </div>
            
          </div>


          <div className="tab">

          <div className="part">
              <h3>Liter</h3>
              <p>
              {val} liters = {liter !== null ? liter.toFixed(3) : 'N/A'} gallons 
              </p>
            </div>

            <div className="part">
              <h3>gallons</h3>
              <p>
              {val} gallons = {gallons !== null ? gallons.toFixed(3) : 'N/A'} liters
              </p>
            </div>

          </div>


          <div className="tab">

          <div className="part">
              <h3>Kilograms</h3>
              <p>
              {val} kilos = {kilograms !== null ? kilograms.toFixed(3) : 'N/A'} pounds 
              </p>
            </div>

            <div className="part">
              <h3>Pounds</h3>
              <p>
              {val} pounds = {pounds !== null ? pounds.toFixed(3) : 'N/A'} kilos
              </p>
            </div>
            
          </div>



          {/* <div className="tab">
            <h3>Volume (Liters/Gallons)</h3>
            <p>
            {val} liters = {liter.toFixed(3)} gallons | {val} gallons = {gallons.toFixed(3)} liters
            </p>
          </div> */}

        
        </div>

      </div>
    </div>
     </>
  )
}

export default App
