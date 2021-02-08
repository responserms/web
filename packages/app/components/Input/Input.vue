<template>
  <c-input :aria-label="ariaLabel" :aria-describedby="ariaDescribedBy" :placeholder="placeholder" :size="size" :icon="icon" :iconSize="iconSize" :variant="variant" :isDisabled="isDisabled" :isInvalid="isInvalid" :isRequired="isRequired" :isReadOnly="isReadOnly" />
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'

type Variant = 'outline' | 'unstyled' | 'flushed' | 'filled'
type Size = 'sm' | 'md' | 'lg'

export default defineComponent({
  props: {
    size: {
      type: Object as PropType<Size>,
    },
    ariaLabel: {
      type: String
    },
    ariaDescribedby: {
      type: String
    },
    placeholder: {
      type: String
    },
    variant: {
      type: Object as PropType<Variant>
    },
    isDisabled: {
      type: Boolean
    },
    isInvalid: {
      type: Boolean
    },
    isRequired: {
      type: Boolean
    },
    isReadOnly: {
      type: Boolean
    },
    rootProps: {
      type: Boolean
    },
  },
  setup() {},
})
</script>
