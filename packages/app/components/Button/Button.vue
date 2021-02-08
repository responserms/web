<template>
  <CButton :aria-label="ariaLabel" :variant="variant" :is-disabled="isDisabled" :loading-text="loadingText" :size="handleSize(size)" @click="handleClick">
    <slot />
  </CButton>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'

type Variant = 'outline' | 'ghost' | 'unstyled' | 'link' | 'solid'
type ButtonSize = 'sm' | 'md' | 'lg'

export default defineComponent({
  props: {
    ariaLabel: {
      type: String,
    },
    variant: {
      type: Object as PropType<Variant>,
      default: 'solid'
    },
    isDisabled: {
      type: Boolean,
    },
    loadingText: {
      type: String
    },
    size: {
      type: Object as PropType<ButtonSize>,
      default: 'md'
    },
  },
  setup() {
    function handleClick() {
      console.log('click')
    }

    function handleSize(size: string) {
      switch (size) {
        case 'sm':
          return 'xs'
        case 'md':
          return 'sm'
        case 'lg':
          return 'md'
      }
    }

    return {
      handleClick,
      handleSize,
    }
  },
})
</script>
