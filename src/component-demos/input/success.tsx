import React from 'react';
import { Input, theme } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';
import type { ComponentDemo } from '../../interface';

function onChange() {}

const Demo = () => {
  const { token } = theme.useToken();
  return (
    <Input
      defaultValue={"I'm the content"}
      suffix={<CheckCircleFilled style={{ color: token.colorSuccess }} />}
      onChange={onChange}
    />
  );
};

const componentDemo: ComponentDemo = {
  demo: <Demo />,
  tokens: ['colorSuccess'],
  key: 'warning',
};

export default componentDemo;
