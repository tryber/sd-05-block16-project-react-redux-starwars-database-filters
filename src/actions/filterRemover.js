export const REMOVE_FILTER = 'REMOVE_FILTER';

export function filterRemover(filter) {
  return {
    type: REMOVE_FILTER, remove: filter,
  };
}
