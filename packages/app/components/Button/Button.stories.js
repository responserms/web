import Button from './Button.vue';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['outline', 'ghost', 'unstyled', 'link', 'solid'],
      },
    },
    size: {
      control: {
        type: 'radio',
        options: ['sm', 'md', 'lg'],
      }
    }
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<Button :aria-label="aria-label" :variant="variant" :isDisabled="isDisabled" :loadingText="loadingText" :size="size">Hello!</Button>',

});

// Each story then reuses that template
export const Default = Template.bind({});

export const Small = Template.bind({});
Small.args = {
  size: 'sm'
}

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
}

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
}

export const Ghost = Template.bind({});
Ghost.args = {
  variant: 'ghost',
}

export const Unstyled = Template.bind({});
Unstyled.args = {
  variant: 'unstyled',
}

export const Link = Template.bind({});
Link.args = {
  variant: 'link',
}

export const Solid = Template.bind({});
Solid.args = {
  variant: 'solid',
}