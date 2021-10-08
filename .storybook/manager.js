 import { addons } from '@storybook/addons';
 import { addDecorator } from '@storybook/react'
// import { ThemeDecorator } from '../theme-decorator'
import theme from './theme';

// addDecorator(ThemeDecorator)

addons.setConfig({
    selectedPanel: undefined,
    isFullscreen: false,
    showNav: true,
    showPanel: true,
    panelPosition: 'bottom',
    enableShortcuts: true,
    isToolShown: true,
    initialActive: 'sidebar',
    sidebar: {
        showRoots: false,
        collapsedRoots: ['other']
    },
    toolbar: {
        title: { hidden: false, },
        zoom: { hidden: false, },
        eject: { hidden: false, },
        copy: { hidden: false, },
        fullscreen: { hidden: false, }
    },
    // theme: create({
    //   base: 'light',
    //   brandTitle: 'ZK UI KIT',
    //   brandUrl: 'https://zk.com',
    //   // brandImage: logo
    // })
    theme: theme,
  });
