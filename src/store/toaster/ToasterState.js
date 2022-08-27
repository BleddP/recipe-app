import React, { useReducer } from "react";
import { SHOW_TOASTER, CLOSE_TOASTER, CLEAR_CONTENT } from "./types";

import ToasterReducer from "./toasterReducer";
import ToasterContext from './toasterContext';

const ToasterState = (props) => {
  const initialState = {
    open: false,
    content: null,
  };

  const [state, dispatch] = useReducer(ToasterReducer, initialState);

  // --- Methods
  const newToaster = (body, timeout = 3000) => {
    dispatch({
      type: SHOW_TOASTER,
      payload: body,
    });
    setTimeout(() => {
      closeToaster()
    }, timeout);
  };

  const closeToaster = () => {
    dispatch({ type: CLOSE_TOASTER });
    setTimeout(() => {
      dispatch({ type: CLEAR_CONTENT });
    }, 500);
  };

  return (
    <ToasterContext.Provider value={{
        open: state.open,
        content: state.content,
        newToaster,
        closeToaster
    }}>{props.children}</ToasterContext.Provider>
  );
};
export default ToasterState;
