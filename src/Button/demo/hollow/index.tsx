import React from 'react';
import { Foo, KButton } from 'kang-ui';
import './index.less';
export default () => (
  <div className="warp">
    <KButton hollow>默认</KButton>
    <KButton type="primary" hollow>
      Primary
    </KButton>
    <KButton type="info" dashed hollow>
      Dashed
    </KButton>
    <KButton type="primary" block hollow>
      100%
    </KButton>
  </div>
);
