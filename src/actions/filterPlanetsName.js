export const FILTER_NAME_PLANET = 'FILTER_NAME_PLANET';

const filtrarPlanetsName = (name) => ({
    type: FILTER_NAME_PLANET,
    name,
});

export default filtrarPlanetsName;
