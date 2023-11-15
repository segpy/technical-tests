const getFiboSerie = (timeSections) => {
  // Generar serie fibonnaci en donde x = el primer numero de los minutos, y = segundo numero de los minutos, z = segundos
  const { minutos, segundos } = timeSections
  let x
  let y
  if (minutos < 10) {
    x = 0
    y = minutos
  } else {
    x = parseInt(minutos.toString().split('')[0])
    y = parseInt(minutos.toString().split('')[1])
  }
  const z = segundos
  const fibonacciSeries = [x, y]

  for (let i = 2; i < z; i++) {
    const nextNumber = fibonacciSeries[i - 1] + fibonacciSeries[i - 2]
    fibonacciSeries.push(nextNumber)
  }
  return fibonacciSeries
}

export {
  getFiboSerie
}
