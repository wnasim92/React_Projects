// REDUCER

import {
   ADD_RECIPE,
   REMOVE_FROM_CALENDAR
} from '../actions'
import {combineReducers} from 'redux';

const initialCalendarState = {
   sunday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  monday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  tuesday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  wednesday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  thursday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  friday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  saturday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
}

// reducer
function calendar (state = initialCalendarState, action){
   // grabbing properties from action
   const {day,recipe, meal} = action

   switch(action.type){
      case 'ADD_RECIPE':
         // ellipsis below is an OBJECT spread operator.
         //notice ...state below occurs twice because we are updating two levels --> meal and the day it corresponds with.
         return {
            ...state,
            [day] : {
            ...state[day],
            [meal]:recipe.label,
            }
         }
      case 'REMOVE_FROM_CALENDAR':
         return {
            ...state,
            [day]: {
            ...state[day],
            [meal]: null,
            }
         }
      default :
         return state;
   }
}

function foodie (state = {}, action) {
  switch (action.type) {
    case ADD_RECIPE :
      const { recipe } = action

      return {
        ...state,
        [recipe.label]: recipe,
      }
    default :
      return state
  }
}
export default combineReducers({
   foodie,
   calendar
})
