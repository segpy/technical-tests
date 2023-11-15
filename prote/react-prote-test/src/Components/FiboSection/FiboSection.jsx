import React from 'react'

// Styles
import './FiboSection.css'

const FiboSection = ({ serieFibo }) => {
  return (
    <div className='serie-fibo'>
      <p>Serie Fibonnaci:</p>
      {serieFibo && <p>[{serieFibo}]</p>}
    </div>
  )
}

export default FiboSection
