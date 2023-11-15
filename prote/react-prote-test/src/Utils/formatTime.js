const formatTime = (horas, minutos, segundos) => {
  return `${horas < 10 ? '0' + horas : horas}:${minutos < 10 ? '0' + minutos : minutos}:${segundos < 10 ? '0' + segundos : segundos}`
}

export {
  formatTime
}
