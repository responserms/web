<template>
  <CButton :size="size" @click="handleClick">
    <slot />
  </CButton>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'

type ButtonSize = 'sm' | 'md' | 'lg'

export default defineComponent({
  props: {
    size: {
      type: Object as PropType<ButtonSize>,
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
