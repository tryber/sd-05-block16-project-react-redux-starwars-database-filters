export default function selectComparacao(valorSelecionado) {
  return {
    type: 'SELECIONAR_COMPARACAO',
    comparacao: valorSelecionado,
  };
}
