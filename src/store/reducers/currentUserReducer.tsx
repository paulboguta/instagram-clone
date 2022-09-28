import { setUser, SET_USER } from "../actions/userActions";

interface ICurrentUser {
  uid: string;
}

const initialState: ICurrentUser = {
  uid: "",
};

const currentUser = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_USER:
      return [state.uid === action.uid];
    default:
      return state;
  }
};

export default currentUser;
