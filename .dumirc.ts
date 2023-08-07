import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'Zikl',
    nav: [{ title: '组件', link: '/components/foo' }],
  },
});
