import uuid from 'uuid';

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const newBand = {
        name: action.name,
        id: uuid()
      }
      return { bands: state.bands.concat(newBand) }

    case 'DELETE_BAND':
        // let newArray = state.bands.slice()
        // return {bands: newArray.filter(band => band.id !== action.payload)}
        return {bands: state.bands.filter(band => band.id !== action.id)};

    default:
      return state;
  }
};
