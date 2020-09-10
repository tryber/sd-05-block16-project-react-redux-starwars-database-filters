export default function selectTitle(valorSelecionado) {
  return {
    type: 'SELECIONAR_TITULO',
    coluna: valorSelecionado,
  };
}
