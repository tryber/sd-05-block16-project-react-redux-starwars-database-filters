
async function starWarsAPI() {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      //  response.ok retorna true se a requisição deu certo
      // a requisição é dada como true se o status do response for entre 200 e
      // 299
      // fonte: https://www.youtube.com/watch?v=8QyukaPDw44
      throw new Error('Não foi possível obter os dados');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

export default starWarsAPI;
