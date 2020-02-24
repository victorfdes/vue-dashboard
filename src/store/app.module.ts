const appModule = {
  namespaced: true,

  state: {
    navDrawerOpen: false,
    isDarkMode: false,
  },

  mutations: {
    toggleNavrawer(state: {navDrawerOpen: boolean}) {
      state.navDrawerOpen = !state.navDrawerOpen;
    },

    toggleDarkMode(state: {isDarkMode: boolean}) {
      state.isDarkMode = !state.isDarkMode;
    },
  },

  actions: {},

  getters: {},
};

export default appModule;
