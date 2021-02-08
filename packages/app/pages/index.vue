<template>
  <div>
    <Button size="sm"> sm </Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import Button from '../components/Button/Button.vue'

export default defineComponent({
  components: {
    Button,
  },
})
</script>
