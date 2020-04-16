<template>
  <div class="project-item--inner" @click="editForm">
    <div class="project-item--img">
      <img :src="projectData.logo_url" :alt="projectData.name">
    </div>
    <div class="project-item--title">
      {{ projectData.name }}
    </div>
    <div class="project-item--status">
      <span v-if="!!projectData.is_active" class="active">Active</span>
      <span v-else>No Active</span>
    </div>
    <div class="project-item--time">
      <dl>
        <div>
          <dt>time this week</dt>
          <dd v-if="projectData.spent_time_week">
            {{ projectData.spent_time_week }}
          </dd>
          <dd>-</dd>
        </div>
        <div>
          <dt>this month</dt>
          <dd v-if="projectData.spent_time_month">
            {{ projectData.spent_time_month }}
          </dd>
          <dd>-</dd>
        </div>
        <div>
          <dt>total</dt>
          <dd v-if="projectData.spent_time_all">
            {{ projectData.spent_time_all }}
          </dd>
          <dd>-</dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>

import EditProjectItem from './EditProjectItem'

export default {
  name: 'ProjectItem',
  components: {
    EditProjectItem
  },
  props: {
    projectData: {
      required: false,
      default: {}
    }
  },
  methods: {
    editForm () {
      this.$modal.show(EditProjectItem, {
        formData: this.projectData
      }, {
        width: 480,
        height: 'auto'
      })
    }
  }
}

</script>
