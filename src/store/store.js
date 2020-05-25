import { useState, useEffect } from "react";

let listeners = [];
let actions = {
  TOGGLE_LOADING: (state) => {
    return { loading: !state.loading };
  },
};
let state = {
  loading: false,
};

export const useStore = () => {
  const setStore = useState(state)[1];

  const dispatch = async (actionType, param) => {
    const newState = await actions[actionType](state, param);
    state = { ...state, ...newState };
    for (const listener of listeners) {
      listener(newState);
    }
  };

  useEffect(() => {
    listeners.push(setStore);

    return () => {
      listeners = listeners.filter((lis) => lis !== setStore);
    };
  }, [setStore]);

  return [state, dispatch];
};

export const initStore = (action, initialState) => {
  if (initialState) state = { ...state, ...initialState };
  actions = { ...action, ...actions };
};
