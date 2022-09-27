import { SET_USER } from "../actions/currentUser";

interface ICurrentUser {
  userID: string;
}

const initialState: ICurrentUser = {
  userID: "",
};

const currentUser = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_USER:
      return [(state.userID = action.uid)];

    default:
      return state;
  }
};

export default currentUser;
