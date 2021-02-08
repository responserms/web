<template>
  <CThemeProvider>
    <CColorModeProvider v-slot="{ colorMode, toggleColorMode }">
      <CBox
        as="main"
        :bg="colorMode === 'light' ? 'white' : 'gray.800'"
        :color="colorMode === 'light' ? 'gray.800' : 'gray.50'"
        class="root"
      >
        <CReset />
        <CIconButton
          position="fixed"
          top="3"
          right="3"
          :aria-label="`Switch to ${
            colorMode === 'light' ? 'dark' : 'light'
          } mode`"
          variant="ghost"
          :icon="colorMode === 'light' ? 'sun' : 'moon'"
          @click="toggleColorMode"
        >
        </CIconButton>
        <div class="wrapper">
          <slot />
        </div>
      </CBox>
    </CColorModeProvider>
  </CThemeProvider>
</template>

<script>
import {
  CThemeProvider,
  CHeading,
  CReset,
  CButton,
  CBox,
  CIconButton,
  CColorModeProvider,
} from '@chakra-ui/vue'
export default {
  name: 'Canvas',
  components: {
    CThemeProvider,
    CHeading,
    CReset,
    CButton,
    CBox,
    CIconButton,
    CColorModeProvider,
  },
}
</script>

<style lang="scss" scoped>
html,
body {
  margin: 0;
}
.root {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
}
</style>
