import { formatTime } from './formatTime'

const getDate = () => {
  // Crear un nuevo objeto Date
  const fechaActual = new Date()
  const horas = fechaActual.getHours()
  const minutos = fechaActual.getMinutes()
  const segundos = fechaActual.getSeconds()

  return { horaActual: formatTime(horas, minutos, segundos), horas, minutos, segundos }
}

export default getDate
