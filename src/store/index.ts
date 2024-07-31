import { createStore } from "vuex";

export const store = createStore({
  state: {
    form: [
      {
        firstName: "Bhavik",
        lastName: "Gajdhar",
        username: "cooku",
        email: "bhavik.gajdhar@1rivet.com",
        phone: "8200684501",
        state: "gujarat",
        isDisabled: false,
        langId: 1,
        gender: "male",
        language: ["gujarati", "english", "hindi"],
        id: 1,
      },
    ],
  },
  mutations: {
    increment(state, payload) {
      console.log(payload);
    },
  },
});
