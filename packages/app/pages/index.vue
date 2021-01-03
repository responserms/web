<template>
  <div>
    <p>Hello: {{ d.d }}</p>
    <CInput type="text" v-model="d.d" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const d = reactive({
      d: '',
    })

    return {
      d,
    }
  },
})
</script>
