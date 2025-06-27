import React from 'react'
import './BtnExercise.css'
// import Button from './Button'
const Botton = () => {
  return (
    <div>
        <button className="bbutton" onClick={()=>console.log("btn-clicked")}>My Button</button>
      {/* <Button onClick={()=>console.log("btn clicked") } >My Button</Button> */}
    </div>
  )
}

export default Botton
