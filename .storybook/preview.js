import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { withMuiTheme } from './decorators/withMuiTheme';

export const parameters = {
  viewMode: 'docs',
  options: {
    storySort: {
      order: ['Default']
    }
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  expanded: true,
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  dependencies: {
    // display only dependencies/dependents that have a story in storybook
    // by default this is false
    withStoriesOnly: true,
    // completely hide a dependency/dependents block if it has no elements
    // by default this is false
    hideEmpty: true
  }
};

export const decorators = [withMuiTheme];

export const globalTypes = {
  theme: {
    name: 'Theme',
    title: 'Theme',
    description: 'Theme for your components',
    defaultValue: 'light',
    toolbar: {
      icon: 'paintbrush',
      dynamicTitle: true,
      items: [
        { value: 'light', left: '☀️', title: 'Light mode' },
        { value: 'dark', left: '🌙', title: 'Dark mode' }
      ]
    }
  }
};
