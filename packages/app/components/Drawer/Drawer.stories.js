import Drawer from './Drawer.vue';

export default {
  title: 'Drawer',
  component: Drawer,
  argTypes: {
    placement: {
      control: {
        type: 'select',
        options: ['right', 'bottom']
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { Drawer },
  props: Object.keys(argTypes),
  template: `
    <Drawer :is-open="isOpen" :placement="placement" :is-full-height="isFullHeight">
      Drawer!
    </Drawer>
  `,
})

export const Right = Template.bind({});
Right.args = {
  isOpen: true,
  isFullHeight: false,
  placement: 'right',
}

export const Bottom = Template.bind({});
Bottom.args = {
  isOpen: true,
  isFullHeight: false,
  placement: 'bottom',
}