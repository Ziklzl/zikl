/*
 * @Author: liuyifan liuyifan@dongfangfuli.com
 * @Date: 2023-07-28 16:17:48
 * @LastEditors: liuyifan liuyifan@dongfangfuli.com
 * @LastEditTime: 2023-08-07 15:42:08
 * @FilePath: /myproject/src/Buttom/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import './index.less';

type ButtonPropTypes = {
  type?: 'primary' | 'default';
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
};

const Button = ({
  type = 'default',
  onClick,
  disabled = false,
  children,
}: ButtonPropTypes) => {
  return (
    <button
      className={`${type === 'primary' ? 'l-btn-primary' : 'l-btn-default'}`}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
