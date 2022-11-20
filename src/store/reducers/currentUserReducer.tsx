import { ActionTypes } from "store/types";

interface ICurrentUser {
  uid: string;
}

const initialState: ICurrentUser = {
  uid: "",
};

interface IAction {
  type: string;
  uid?: any;
}

const currentUser = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return {
        uid: action.uid,
      };
    default:
      return state;
  }
};

export default currentUser;
