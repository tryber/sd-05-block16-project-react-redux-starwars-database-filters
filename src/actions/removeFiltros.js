export default function removeFiltros(event) {
  /* console.log(objetao) */
  return {
    type: 'REMOVE_FILTRO',
    nomeDoFiltroClicado: event.target.id,
  };
}
