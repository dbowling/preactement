module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: '@storybook/preact',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  babel: async (options) => ({
    ...options,
    presets: [['@babel/typescript', { jsxPragma: 'h' }]],
  }),
};
