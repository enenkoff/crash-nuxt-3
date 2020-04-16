<template>
  <header class="header">
    <nuxt-link exact class="header-logo" to="/">
      <img src="https://quwi.com/img/quwi-logo.png" width="25px" height="25px">
    </nuxt-link>
    <nav v-if="isLogged" class="header-nav">
      <nuxt-link exact to="/" no-prefetch active-class="active">
        Projects
      </nuxt-link>
      <a @click="logout">Logout</a>
    </nav>
  </header>
</template>

<script>
export default {
  components: {
  },
  props: {
    isLogged: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {

    }
  },
  methods: {
    logout () {
      this.$axios.post('https://api.quwi.com/v2/auth/logout', {
        headers: {
          Authorization: 'Bearer ' + this.$store.state.userToken
        }
      }).then((response) => {
        this.$cookies.remove('quwi_user_token')
        this.$store.commit('removeUserToken')
        this.$router.replace({ path: '/login' })
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
    }
  }
}
</script>
