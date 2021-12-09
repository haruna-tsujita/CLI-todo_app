import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
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
    update(state, data) {
        const x = state.memos.find(memo => memo.id == data.id)
        x.body = data.body
    },
    remove (state, id) {
      for (let i =0; i < state.memos.length; i++) {
        if (state.memos[i].id == id) {
          state.memos.splice(i, 1)
        }
      }
    }
  }
})
