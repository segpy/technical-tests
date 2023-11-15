import React, { useEffect, useState } from 'react'

// Utils
import getDate from '../../Utils/getDate'

// Components
import ButtonsSection from '../ButtonsSection/ButtonsSection'
import SelectedTime from '../SelectecTime/SelectecTime'
import FiboSection from '../FiboSection/FiboSection'

// Styles
import './TimeComponent.css'
const TimeComponent = () => {
  const [horaActual, setHoraActual] = useState('')
  const [timeSections, setTimeSections] = useState({})
  const [horaCapturada, setHoraCapturada] = useState({})
  const [clicked, setClicked] = useState(null)
  const [serieFibo, setSerieFibo] = useState([])

  useEffect(() => {
    const actualizarHora = () => {
      const { horaActual: horaFormateada, horas, minutos, segundos } = getDate()
      setHoraActual(horaFormateada)
      setTimeSections({
        horas,
        minutos,
        segundos
      })
    }

    // Actualizar la hora cada segundo
    const intervalo = setInterval(actualizarHora, 1000)

    // Limpieza del intervalo cuando el componente se desmonta
    return () => {
      clearInterval(intervalo)
    }
  }, [])

  return (
    <>
      <div className='time-container'>
        <h1 className='time-title'>Hora actual</h1>
        <h2 className='time'>{horaActual}</h2>
        <SelectedTime horaCapturada={horaCapturada} clicked={clicked} />
        <ButtonsSection setClicked={setClicked} setSerieFibo={setSerieFibo} setHoraCapturada={setHoraCapturada} timeSections={timeSections} />
        <FiboSection serieFibo={serieFibo} />
      </div>

    </>

  )
}

export default TimeComponent
