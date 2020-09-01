export default function procurarPlaneta(planetas) {
  return {
    type: 'FILTRO_POR_NOME',
    payload: planetas,
  };
}
