import React, { useState } from 'react'

function Area() {
    const [base, setBase] = useState()
    const [height, setHeight] = useState()
    const [area, setArea] = useState()
    const handleSubmit=()=>{
        setArea((base*height)/2)
    }
  return (
    <>
    <div className='area page'>

    <h1>Area of a Triangle</h1>
    <div className='main'>

    <label htmlFor='base'>Enter the length of base of the triangle</label><br/>
    <input id='base' type='number' onChange={(e)=>setBase(e.target.value)}/><br/>
    <label htmlFor='height'>Enter the length of height of the triangle</label><br/>
    <input id='height' type='number' onChange={(e)=>setHeight(e.target.value)}/><br/>
    </div>
    <div className='output'>Area of the triangle is: {area} unit^2</div>
    <button onClick={()=>handleSubmit()} className='btn'>Submit</button>
    </div>
    </>

  )

}

export default Area