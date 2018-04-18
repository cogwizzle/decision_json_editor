export default (state = {
  value: {
    name: 'undefined',
    state: []
  }
}, action) => {
  switch(action.type) {
    case 'UPDATE_OUTPUT':

    try {
      return {
        ...state,
        value: (typeof action.value === 'string') ? JSON.parse(action.value) : action.value
      };
    } catch (e) {

      return state;
    }
    default:

      return state;
  }
};