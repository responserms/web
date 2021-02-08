<template>
  <CSelect :placeholder="placeholder" :size="size" :icon="icon" :iconSize="iconSize" :variant="variant" :isDisabled="isDisabled" :isInvalid="isInvalid" :isRequired="isRequired" :isReadOnly="isReadOnly">
    <slot />
  </CSelect>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'

type Variant = 'outline' | 'unstyled' | 'flushed' | 'filled'
type Size = 'sm' | 'md' | 'lg'

export default defineComponent({
  props: {
    placeholder: {
      type: String
    },
    size: {
      type: Object as PropType<Size>,
    },
    icon: {
      type: String
    },
    iconSize: {
      type: Number
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
