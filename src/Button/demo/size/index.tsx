import React from 'react';
import { Foo, KButton } from 'kang-ui';
import './index.less';
export default () => (
  <div className="warp">
    <KButton type="primary" size="small">
      small
    </KButton>
    <KButton type="primary" size="default">
      default
    </KButton>
    <KButton type="primary" size="large">
      large
    </KButton>
  </div>
);
