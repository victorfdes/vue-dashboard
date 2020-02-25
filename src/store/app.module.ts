import { navItems } from '@/store/constants';
import { uuid } from 'uuidv4';
import moment from 'moment';

const appModule = {
  namespaced: true,

  state: {
    navDrawerOpen: false,
    isDarkMode: false,
    navItems,
    chats: [
      {
        id: uuid(),
        sender: 'Sam Hunter',
        senderPicture: 'https://randomuser.me/api/portraits/men/32.jpg',
        lastMessage: 'The classic latin passage that just never gets old, enjoy!',
        timeStamp: moment().subtract(6, 'days'),
      },
    ],
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
