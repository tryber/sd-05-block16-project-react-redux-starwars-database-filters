const TABLE_KEYS = [
  'name',
  'gravity',
  'rotation_period',
  'climate',
  'orbital_period',
  'diameter',
  'terrain',
  'surface_water',
  'population',
  'films',
  'created',
  'edited',
  'url',
];

function rKey(key) {
  const rand = 'qwertyuiopasdfghjklç'[Math.floor(Math.random(20))];
  return `${key}_${rand}_${Math.floor(Math.random() * 1E12)}`;
}

function formatName(name = '') {
  const str = `${name.slice(0, 1).toUpperCase()}${name.slice(1)}`;
  return str.replace('_', ' ');
}

export {
  TABLE_KEYS,
  rKey,
  formatName,
};
