import { createStore } from "vuex";

const store = createStore({
  state: {
    count: 0,
    textColor: "red",
  },
  mutations: {
    handleIncrease(state, randomNumber) {
      state.count += randomNumber;
    },
    handleDecrease(state, randomNumber) {
      state.count -= randomNumber;
    },
    setTextColor(state, payload) {
      state.textColor = payload;
    },
  },
  actions: {
    handleIncreaseAction({ commit }) {
      fetch(
        "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
      )
        .then((res) => res.json())
        .then((number) => {
          commit("handleIncrease", number);
        });
    },
    handleDecreaseACtion({ commit }) {
      fetch(
        "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
      )
        .then((res) => res.json())
        .then((number) => {
          commit("handleDecrease", number);
        });
    },
    setTextColorAction({ commit }, payload) {
      commit("setTextColor", payload);
    },
  },
  getters: {
    counterSquared(state) {
      return state.count * state.count;
    },
  },
  modules: {},
});

export default store;
