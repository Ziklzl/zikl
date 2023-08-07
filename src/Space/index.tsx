/*
 * @Author: liuyifan liuyifan@dongfangfuli.com
 * @Date: 2023-07-31 17:44:23
 * @LastEditors: liuyifan liuyifan@dongfangfuli.com
 * @LastEditTime: 2023-08-07 15:30:13
 * @FilePath: /myproject/src/Space/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import './index.less';

type SpacePropTypes = {
  children: React.ReactNode;
  size?: number;
  direction?: 'horizontal' | 'vertical';
  wrap?: boolean;
  align?: 'center' | 'start' | 'end' | 'baseline';
  SpaceAlign: 'center' | 'start' | 'end' | 'baseline';
};

const Space = ({
  children,
  size = 10,
  direction = 'horizontal',
  wrap = false,
  align = 'center',
}: SpacePropTypes) => {
  return (
    <div
      className="l-space-size"
      style={{
        flexDirection: direction === 'vertical' ? 'column' : 'unset',
        gap: `${size}px`,
        alignItems: align,
        flexWrap: direction === 'horizontal' && wrap ? 'wrap' : 'unset',
      }}
    >
      {React.Children.map(children, (child, index) => {
        return (
          <div className="l-space-item" key={index}>
            {child}
          </div>
        );
      })}
    </div>
  );
};
export default Space;
