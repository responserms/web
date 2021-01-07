import Canvas from './components/Canvas.vue';
export * from '~~/.nuxt-storybook/storybook/preview.js';

export const decorators = [
  () => {
    return {
      components: { Canvas },
      template: `
        <Canvas>
          <story />
        </Canvas>`
    }
  }
];
