import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'

const initial =[{
    name: null,
    rating: null,
    imgUrl: null,
    createDate: null,
  }]

const restaurantsList = (state = initial, action) => {
  switch (action.type) {
    case 'UPDATE_LIST':
      console.log('egolo');
      return action.data;
    default:
      return state;
  }
};

const reducers = combineReducers({
  restaurantsList,
  form
});

export default reducers;
