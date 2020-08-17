export default function filters(data, textFilter) {
  return data.filter((planet) => planet.name.toLowerCase().includes(textFilter.toLowerCase()));
}
