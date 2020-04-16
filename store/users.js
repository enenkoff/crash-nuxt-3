export const state = () => ({
  users: [],
  token: ''
})

export const mutations = {
  setUsers(state, users) {
    state.users = users
  },
  setToken(state, token) {
    state.token = token
  }
}

export const actions = {
  async fetch({commit}) {


    const token = await this.$cookies.get('quwi_user_token')

    commit('setToken', token)

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
  users: s => s.users,
  token: s => s.token
}
