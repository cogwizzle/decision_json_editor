import v4 from 'uuid/v4';

export default (state = {
  value: {
    name: 'undefined',
    state: [
      {
        id: v4(),
        parent: null,
        slide: '#Initial Slide',
        link: null
      }
    ]
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