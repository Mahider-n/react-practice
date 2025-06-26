// import React from 'react'
import Button from './Button'

import React from 'react'
interface Props{
    onClose:()=>void
}
const AlertExercise = ({onClose}:Props) => {
  return (
      <div className='alert alert-primary alert-dismissible'> My Alert
        <button type='button' className='btn-close' data-bs-dismiss='ale' onClick= {onClose}></button>
    </div>
  )
}

export default AlertExercise
