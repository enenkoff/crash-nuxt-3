<template>
  <div class="app-layout wrapper">
    <Header />

    <main class="main">
      <div class="container">
        <nuxt />
      </div>
    </main>
    <Footer />
    <modals-container />
    <v-dialog />
  </div>
</template>

<script>
    import Header from '../components/layout/Header.vue'
    import Footer from '../components/layout/Footer.vue'

    export default {
        components: {
            Header,
            Footer
        },
        computed: {
            isLogged () {
                // return this.$store.state.validToken
            }
        }
    }
</script>
