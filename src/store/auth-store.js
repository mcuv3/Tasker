import { initStore } from "./store";
import axios from "axios";

const initialState = {
  auth: {
    idToken: null,
    localId: null,
    refreshToken: null,
    error: null,
  },
};

const configureStore = () => {
  const actions = {
    AUTH_USER: async (state, credentials) => {
      const user = {
        email: credentials.email,
        password: credentials.password,
        returnSecureToken: true,
      };
      let url = credentials.isSignUp
        ? "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCCf0ZdIKWK6YL07D1mf30gpj4XlwnDgac"
        : "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCCf0ZdIKWK6YL07D1mf30gpj4XlwnDgac";

      let response = await dispatchAsync(url, user, state);

      let data;
      if (response.status === 200) {
        localStorage.setItem("idToken", response.data.idToken);
        localStorage.setItem("localId", response.data.localId);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        data = {
          auth: {
            idToken: response.data.idToken,
            localId: response.data.localId,
            refreshToken: response.data.refreshToken,
            error: null,
          },
          tasks: {
            ...state.tasks,
            firstTask: null,
          },

          loading: false,
        };
        if (state.tasks.firstTask) {
          url = `https://tasker-mcuve.firebaseio.com/${response.data.localId}/${state.tasks.firstTask.date}/${state.tasks.firstTask.seccion}.json`;
          const res = await dispatchAsync(
            url,
            state.tasks.firstTask.task,
            state
          );
          if (!res.response) data.auth.error = res.error;
        }
      } else
        data = {
          auth: {
            ...initialState.auth,
            error: response.error.response.data.error,
          },
          loading: false,
        };

      return data;
    },
    LOG_OUT: () => {
      localStorage.removeItem("idToken");
      localStorage.removeItem("localId");
      localStorage.removeItem("refreshToken");
      return {
        ...initialState,
      };
    },
    CHECK_AUTH: (state) => {
      return {
        auth: {
          idToken:
            state.auth.idToken === null
              ? localStorage.getItem("idToken")
              : state.auth.idToken,
          localId:
            state.auth.localId === null
              ? localStorage.getItem("localId")
              : state.auth.localId,
          refreshToken:
            state.auth.refreshToken === null
              ? localStorage.getItem("refreshToken")
              : state.auth.refreshToken,
          error: null,
        },
      };
    },
  };

  const dispatchAsync = async (url, payload, state) => {
    try {
      const response = await axios.post(url, payload);
      return response;
    } catch (error) {
      return {
        response: error.response,
        error,
      };
    }
  };

  initStore(actions, initialState);
};

export default configureStore;
