import React from 'react'

// Utils
import { formatTime } from '../../Utils/formatTime'

// Styles
import './SelectedTime.css'

const SelectedTime = ({ clicked, horaCapturada = {} }) => {
  return (
    <div className='time-sections'>
      {clicked && <p>Muestreo: {formatTime(horaCapturada.horas, horaCapturada.minutos, horaCapturada.segundos)}</p>}

      <p>x: {horaCapturada.minutos && <label>{horaCapturada.minutos < 10 ? 0 : parseInt(horaCapturada.minutos.toString().split('')[0])}</label>}</p>

      <p>y: {horaCapturada?.minutos && <label>{horaCapturada.minutos < 10 ? horaCapturada.minutos : parseInt(horaCapturada.minutos.toString().split('')[1])}</label>}</p>

      <p>z: {horaCapturada?.segundos && <label>{horaCapturada.segundos}</label>}</p>
    </div>
  )
}

export default SelectedTime
