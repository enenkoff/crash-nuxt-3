<template>
  <section>
    <h1>{{pageTitle}}</h1>
<!--    {{token}}-->
    <ul>
      <li v-for="user of users" :key="user.id">
        <a href="#" @click.prevent="openUser(user)">
          {{user.name}}
          <div>{{user.token}}</div>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  // async fetch({store}) {
  //
  //   if (store.getters['users/users'].length === 0) {
  //     await store.dispatch('users/fetch')
  //   }
  // },
    async asyncData ({ app }) {

      const token = await app.$cookies.get('quwi_user_token')

      let users;
      await app.$axios.get('https://api.quwi.com/v2/projects', {
          headers: {
              Authorization: 'Bearer ' + token
          }
      }).then((response) => {
          users = response.data.projects
      }).catch((error) => {
          this.$modal.show('dialog', {
              text: error,
              buttons: [
                  {
                      title: 'Close'
                  }
              ]
          })
      })

      return { users }
  },
  data: () => ({
      users: [],
    pageTitle: 'Users page'
  }),
  computed: {
    // users() {
    //   return this.$store.getters['users/users']
    // },
    // token() {
    //   return this.$store.getters['users/token']
    // }
  },
  methods: {
    openUser(user) {
      this.$router.push('/users/' + user.id)
    }
  }
}
</script>

