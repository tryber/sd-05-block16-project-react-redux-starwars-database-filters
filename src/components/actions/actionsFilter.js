export const CHANGE_FILTERBYNAME = 'CHANGE_FILTERBYNAME';
export const CHANGE_FILTERNUMERIC = 'CHANGE_FILTERNUMERIC';

function changeFilterByName(nameInput) {
  return { type: CHANGE_FILTERBYNAME, nameInput };
}

function changeFilterByNumeric(column, comparison, value) {
  return { type: CHANGE_FILTERNUMERIC, column, comparison, value };
}
export {
  changeFilterByName,
  changeFilterByNumeric,
};
