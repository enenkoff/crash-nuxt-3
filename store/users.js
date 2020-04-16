export const state = () => ({
  users: []
})

export const mutations = {
  setUsers(state, users) {
    state.users = users
  }
}

export const actions = {
  async fetch({commit}, token) {



    let users;

    await this.$axios.get('https://api.quwi.com/v2/projects', {
      headers: {
        Authorization: 'Bearer ' + token
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
