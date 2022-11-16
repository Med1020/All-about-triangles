import React, { useState } from 'react'

function Hypotenuse() {
    var [side1, setSide1] = useState()
    var [side2, setSide2] = useState()
    var [side3, setSide3] = useState()

    const handleClick =()=>{
        side1= Number(side1)
        side2 = Number(side2)
        side3 = Number(side3)
        setSide3(Math.sqrt(side1*side1 + side2*side2))
        
    }   
  return (
   <>
   <div className='hypotenuse page'>

   <h1>Hypotenuse</h1>
   <label htmlFor='first-side'>Enter the length of one side of triangle</label><br/>
   <input id='first-side' onChange={(e)=>setSide1(e.target.value)} autocomplete="off" required/><br/>
   <label htmlFor = 'second-side'>Enter the length of other side of the triangle</label><br/>
   <input id ='second-side' onChange={(e)=>setSide2(e.target.value)} /><br/>
   <div className='output'>Length of third side must be: {side3}</div>
   <button className="btn" onClick={()=>{handleClick()}}>Submit</button>
   </div>
   </>
  )
}

export default Hypotenuse
