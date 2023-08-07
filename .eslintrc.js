/*
 * @Author: liuyifan liuyifan@dongfangfuli.com
 * @Date: 2023-07-28 14:29:21
 * @LastEditors: liuyifan liuyifan@dongfangfuli.com
 * @LastEditTime: 2023-08-07 15:33:19
 * @FilePath: /myproject/.eslintrc.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  extends: require.resolve('@umijs/lint/dist/config/eslint'),
  overrides: [
    {
      files: ['*.ts', '*.tsx', '.dumirc.ts'], // 添加 .dumirc.ts
      extends: [
        'eslint:recommended',
        // 可以添加其他扩展配置
      ],
    },
  ],
};
