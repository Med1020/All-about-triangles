import React,{ useState } from 'react'

function IsTriangle() {
  var [angle1, setAngle1] = useState()
  var [angle2, setAngle2] = useState()
  var [angle3, setAngle3] = useState()
  const [output, setOutput] = useState()
  const enabled = (angle1!=='' && angle2!=='' && angle3!=='')


  const checkSum =()=>{
    angle1 = Number(angle1)
    angle2 = Number(angle2)
    angle3 = Number(angle3)
    let sumOfAngles = 0
    sumOfAngles = angle1 + angle2 + angle3
    console.log(sumOfAngles)
    if(sumOfAngles === 180){
      setOutput("It's a Triangle!")
    }
    else{
      setOutput("It is not a Triangle")
    }
  }

  const handleSubmit=()=>{

    checkSum()
  }
  return (
    <>
    <div className='istriangle page'>

    <h1>Is Triangle?</h1>
    <label htmlFor='angle-1' >Enter first angle:</label><br />
    <input id='angle-1' onChange={(e)=>setAngle1(e.target.value)}/><br/>
    <label htmlFor='angle-2' >Enter second angle:</label><br />
    <input id='angle-2' onChange={(e)=>setAngle2(e.target.value)}/><br/>
    <label htmlFor='angle-3' >Enter third angle:</label><br />
    <input id='angle-3'onChange={(e)=>setAngle3(e.target.value)} /><br/>
    <div className='output'>{output}</div>
    <button className='btn' onClick={()=> handleSubmit()} disabled = {!enabled}>Check</button>
    </div>
    </>
  )
}

export default IsTriangle