import Input from './Input.vue';

export default {
  title: 'Input',
  component: Input,
  args: {
    placeholder: 'Input text'
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['outline', 'unstyled', 'flushed', 'filled'],
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
  template: 
    '<Input :aria-label="ariaLabel" :aria-describedby="ariaDescribedBy" :placeholder="placeholder" :size="size" :icon="icon" :iconSize="iconSize" :variant="variant" :isDisabled="isDisabled" :isInvalid="isInvalid" :isRequired="isRequired" :isReadOnly="isReadOnly" :aria-label="aria-label" :variant="variant" :isDisabled="isDisabled" :loadingText="loadingText" :size="size"></Input>',
});

export const Default = Template.bind({});

export const Small = Template.bind({});
Small.args = {
  size: 'sm'
}

export const Medium = Template.bind({});
Medium.args = {
  size: 'md'
}

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
}

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
}

export const Unstyled = Template.bind({});
Unstyled.args = {
  variant: 'unstyled',
}

export const Flushed = Template.bind({});
Flushed.args = {
  variant: 'flushed',
}

export const Filled = Template.bind({});
Filled.args = {
  variant: 'filled',
}