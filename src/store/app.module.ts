import { navItems } from '@/store/constants';

const appModule = {
  namespaced: true,

  state: {
    navDrawerOpen: false,
    isDarkMode: false,
    navItems,
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
