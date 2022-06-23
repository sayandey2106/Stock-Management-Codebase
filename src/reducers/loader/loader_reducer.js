import {
  LOADER,
} from "../../constants/loader/loaderConst";

const initial_state = {
  openLoader: false,
};

export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case LOADER:
      return state = { ...state, openLoader: action.payload, };
    default:
      return state;
  }
}
