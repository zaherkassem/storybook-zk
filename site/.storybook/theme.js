import { create } from '@storybook/theming';
//import { Palette } from '../src/styles';
// import logo from './shared/logo sideways.webp';
// import '../src/styles/fonts/Roboto/style.css';

export default create({
  base: 'light',

  colorPrimary: '#28a6f5',
  colorSecondary: '#1ea7fd',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: '#fff',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#162d3d',
  textInverseColor: '#28a6f5',

  // Toolbar default and active colors
  barTextColor: '#999',
  barSelectedColor: '#28a6f5',
  barBg: '#ffffff',

  // Form colors
  inputBg: 'white',
  inputBorder: '#162d3d',
  inputTextColor: 'black',
  inputBorderRadius: 10,

  brandTitle: 'ZK UI KIT',
  brandUrl: 'https://zk.com',
  //brandImage: logo
});
