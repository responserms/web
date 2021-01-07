<template>
  <CButton :size="size" @click="handleClick">
    <slot />
  </CButton>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    size: {
      type: String,
    },
  },
  setup() {
    function handleClick() {
      console.log('click')
    }

    return {
      handleClick,
    }
  },
})
</script>
