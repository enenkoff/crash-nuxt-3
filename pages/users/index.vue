<template>
  <section>
    <h1>{{pageTitle}}</h1>
    {{token}}
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
  async fetch({store}) {

    if (store.getters['users/users'].length === 0) {
      await store.dispatch('users/fetch')
    }
  },
  data: () => ({
    pageTitle: 'Users page'
  }),
  computed: {
    users() {
      return this.$store.getters['users/users']
    },
    token() {
      return this.$store.getters['users/token']
    }
  },
  methods: {
    openUser(user) {
      this.$router.push('/users/' + user.id)
    }
  }
}
</script>

