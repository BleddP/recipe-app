import { SHOW_TOASTER, CLOSE_TOASTER, CLEAR_CONTENT } from "./types";

const ToasterReducer = (state, action) => {
  switch (action.type) {
    case SHOW_TOASTER:
      return {
        open: true,
        content: action.payload,
      };

    case CLOSE_TOASTER:
      return {
        ...state,
        open: false,
      };

      case CLEAR_CONTENT:
      return {
        ...state,
        content: null,
      };
  }
};

export default ToasterReducer
