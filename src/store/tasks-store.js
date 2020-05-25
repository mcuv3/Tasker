import { initStore } from "./store";

const initialState = {
  tasks: {
    firstTask: null,
  },
};

const storeTask = () => {
  const actions = {
    SET_FIRST_TASK: (state, args) => {
      return {
        tasks: {
          ...state.tasks,
          firstTask: {
            task: args.task,
            date: args.realDate,
            seccion: args.seccion,
          },
        },
      };
    },
  };

  initStore(actions, initialState);
};

export default storeTask;
