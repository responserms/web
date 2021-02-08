<template>
  <CDrawer
    :is-open="isOpen"
    :is-full-height="isFullHeight"
    :on-close="onClose"
    :placement="placement"
  >
    <CDrawerOverlay />
    <CDrawerContent>
      <CDrawerCloseButton @click="onClose" />
      <CDrawerHeader>
        <slot name="header" />
      </CDrawerHeader>

      <CDrawerBody>
        <slot />
      </CDrawerBody>

      <CDrawerFooter>
        <slot name="footer" />
      </CDrawerFooter>
    </CDrawerContent>
  </CDrawer>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'

type DrawerPlacement = 'right' | 'bottom'

export default defineComponent({
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    isFullHeight: {
      type: Boolean,
      default: false,
    },
    placement: {
      type: Object as PropType<DrawerPlacement>,
      default: 'right',
    },
  },
  setup(p, { emit }) {
    function onClose() {
      emit('close')
    }

    return {
      onClose,
    }
  },
})
</script>
