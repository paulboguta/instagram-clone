import { PayloadAction } from "@reduxjs/toolkit";
import { setUser, SET_USER } from "../actions/userActions";

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
    case SET_USER:
      return {
        uid: action.uid,
      };
    default:
      return state;
  }
};

export default currentUser;
