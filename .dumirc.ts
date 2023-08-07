import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'zikl',
    nav: [{ title: '组件', link: '/components/foo' }],
  },
});
