import { createStore } from 'vuex'

export default createStore({
  state: {
    cards: [
      {
        name: 'Gmail',
        description: 'These Gmail contacts will sync to MailChimp',
        logo: require("../assets/Gmail-icon.png")
      },
      {
        name: 'MailChimp',
        description: 'These Mailchimp contacts will sync to Gmail',
        logo: require("../assets/chimp-icon.png")
      }
    ],
    expanded: false,
    isClicked: false
  },
  mutations: {
    IS_CLICKED (state) {
      state.isClicked = !state.isClicked
    },
    EXPANDED (state) {
      state.expanded = !state.expanded
    }
  },
  actions: {
    changeIsClicked({ commit }) {
      commit('IS_CLICKED')
    },
    updateExpanded({ commit }) {
      commit('EXPANDED')
    }
  },
  getters: {
    getExpanded(state) {
      return state.expanded
    },
    getIsClicked(state) {
      return state.isClicked
    }
  }
})
