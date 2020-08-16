function fncComparador(valorDaColuna, comparador, value) {
  switch (comparador) {
    case 'maior que':
      return valorDaColuna > value;
    case 'menor que':
      return valorDaColuna < value;
    case 'igual a':
      // console.log('igual a');
      return valorDaColuna === value;
    default:
      return true;
  }
}

export default function allFilteredFunc(data, nameFilter, numericFilterArr) {
  const dataFilteredByName = data.filter((planet) =>
    planet.name.toLowerCase().includes(nameFilter.toLowerCase()),
  );

  return dataFilteredByName.filter((planet) => {
    let planetaFiltradoPorTodasFiltros = true;
    for (let i = 0; i < numericFilterArr.length; i += 1) {
      if (
        !fncComparador(
          Number(planet[numericFilterArr[i]['column']]),
          numericFilterArr[i]['comparison'],
          Number(numericFilterArr[i]['value']),
        )
      ) {
        // console.log('entrou no if');
        planetaFiltradoPorTodasFiltros = false;
      }
    }
    return planetaFiltradoPorTodasFiltros;
  });
}
