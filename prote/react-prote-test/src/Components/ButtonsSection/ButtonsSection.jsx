import React from 'react'

// Utils
import { getFiboSerie } from '../../Utils/getFiboSerie'

// Styles
import './ButtonsSection.css'

const ButtonsSection = ({ setClicked, setSerieFibo, setHoraCapturada, timeSections = {} }) => {
  const handleClick = () => {
    setClicked(true)
    // Obtener la serie de fibonacci
    const fibonacciSeries = getFiboSerie(timeSections)

    // Actualizar el estado de la serie de fibonacci
    setSerieFibo(fibonacciSeries.reverse().join(', '))
    setHoraCapturada(timeSections)
  }

  const handleClear = () => {
    // Actualizar el estado de la serie de fibonacci
    setClicked(false)
    setSerieFibo([])
  }
  return (
    <div className='button-sections'>
      <button className='click' onClick={handleClick}>
        <span>
          Generar secuencia
        </span>
      </button>
      <button className='clear' onClick={handleClear}>
        <span>Limpiar</span>
      </button>
    </div>
  )
}

export default ButtonsSection
