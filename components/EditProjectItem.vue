<template>
  <div class="project-edit">
    <div class="project-edit--form form-field">
      <ValidationObserver v-slot="{ handleSubmit }">
        <form method="POST" @submit.prevent="handleSubmit(submit)">
          <h3 class="project-edit--title">
            Project edit
          </h3>
          <div class="project-edit--field form-field">
            <ValidationProvider v-slot="{ classes, errors }" name="name" rules="required">
              <input v-model="form.name" class="input form-input" :class="classes" type="text" placeholder="Project name">
              <span v-show="errors.length>0" class="is-invalid">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="project-edit--cta">
            <button type="button" class="btn btn-color--white btn-size--md" @click="$emit('close')">
              Cancel
            </button>
            <button type="submit" class="btn btn-color--blue btn-size--md">
              Submit
            </button>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    formData: {
      required: true,
      default: {}
    }
  },
  data () {
    return {
      form: {
        name: this.formData.name
      }
    }
  },
  methods: {
    submit () {
      this.$axios.post('https://api.quwi.com/v2/projects-manage/update?id=' + this.formData.id, {
        headers: {
          Authorization: 'Bearer ' + this.$store.state.userToken
        }
      }).then((response) => {
        // during the test work, API did not work correctly
        this.$store.commit('changeProjectName', { id: this.formData.id, name: this.form.name })
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

<style>
  .v--modal-overlay .v--modal-box {
    max-width: 95vw;
    left: 0 !important;
    right: 0;
    margin: auto;
  }

</style>
