export const state = () => ({
  users: []
})

export const mutations = {
  setUsers(state, users) {
    state.users = users
  }
}

export const actions = {
  async fetch({commit}) {

    

    let users;

    await this.$axios.get('https://api.quwi.com/v2/projects', {
      headers: {
        Authorization: 'Bearer 2ec994fb9a453c489ba98d607c5f111a'
      }
    }).then((response) => {
      users = response.data.projects
    })

    commit('setUsers', users)
  }
}

export const getters = {
  users: s => s.users
}
