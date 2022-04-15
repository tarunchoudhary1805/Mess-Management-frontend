import {
  GET_STUDENTS_LIST,
  GET_EXPENSE,
  ADD_EXPENSE,
  GET_FEEDBACK,
} from "./admin.types";

const initialState = {
  list: [],
  expense: [],
  feedbacks: [],
};
console.log(initialState);
const Adminreducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STUDENTS_LIST:
      return {
        ...state,
        list: action.payload,
      };
    case GET_EXPENSE:
    case ADD_EXPENSE:
      return {
        ...state,
        expense: action.payload,
      };
    case GET_FEEDBACK:
      return {
        ...state,
        feedbacks: action.payload,
      };

    default:
      return state;
  }
};

export default Adminreducer;
