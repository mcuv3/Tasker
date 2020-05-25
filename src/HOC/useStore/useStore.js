import { useStore } from "../../store/store";
import React from "react";

const useStoreHook = (WrappedComponent) => {
  const [store, dispatch] = useStore();
  return (props) => {
    return <WrappedComponent {...props} store={store} dispatch={dispatch} />;
  };
};

export default useStoreHook;
