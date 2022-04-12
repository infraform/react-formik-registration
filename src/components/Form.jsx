import React from 'react'
import Moon from '../icons/Moon'
import Sun from '../icons/Sun'

function FormSide({isNight, change}) {
  return (
    <div className={isNight ? 'form-2' : 'form-1'}>
      <div className='icon'>
        {isNight ?  <Sun change = {change} /> : <Moon change = {change} />}
      </div>
      <h3>Kayıt</h3>
    </div>
  )
}

export default FormSide