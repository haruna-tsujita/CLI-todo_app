import Vue from 'vue'
import createdPersistedState from 'vuex-persistedstate'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createdPersistedState()],
  state: {
    memos: []
  },
  mutations: {
    save (state, memo) {
      if (state.memos.length){
        const max = state.memos[state.memos.length - 1].id
        memo.id = max + 1
      } else {
        memo.id = 1
      }
      state.memos.push(memo)
      },
    update(state, memoData) {
        const memo = state.memos.find(memo => memo.id === Number(memoData.id))
        memo.body = memoData.body
    },
    remove (state, id) {
      for (let i = 0; i < state.memos.length; i++) {
        if (state.memos[i].id === Number(id)) {
          state.memos.splice(i, 1)
        }
      }
    }
  }
})
