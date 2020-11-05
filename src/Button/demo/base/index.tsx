import React from 'react';
import { Foo, KButton } from 'kang-ui';
import './index.less';
export default () => (
  <div className="warp">
    <KButton>默认</KButton>
    <KButton type="primary">Primary</KButton>
    <KButton type="info">Info</KButton>
    <KButton type="warning">Warning</KButton>
    <KButton type="error">Error</KButton>
    <KButton type="success">Success</KButton>
    <KButton type="default">Default</KButton>
    <KButton disabled>禁用</KButton>
    <KButton type="info" dashed>
      Dashed
    </KButton>
    <KButton type="primary" block>
      100%
    </KButton>
  </div>
);
