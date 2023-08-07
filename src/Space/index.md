---
title: Space 组件
group:
  title: 基本组件
  order: 0
---

Space 组件

```jsx
import { Space } from 'Zikl';
import { Button } from 'Zikl';

export default () => (
  <Space size={11}>
    <Button type="primary">间距加100px</Button>
    <span>Item 2</span>
    <span>Item 3</span>
  </Space>
);
```
