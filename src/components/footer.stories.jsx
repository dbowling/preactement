/** @jsx h */
import { h } from 'preact';
import { Footer } from './footer.component';

// More on default export: https://storybook.js.org/docs/preact/writing-stories/introduction#default-export
export default {
  title: 'Example/Footer',
  component: Footer,
  // More on argTypes: https://storybook.js.org/docs/preact/api/argtypes
  argTypes: {
    copyright: { control: 'text' },
  },
};

// More on component templates: https://storybook.js.org/docs/preact/writing-stories/introduction#using-args
const Template = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/preact/writing-stories/args
Primary.args = {
  copyright: '2022',
};


