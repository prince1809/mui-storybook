import React from 'react';

import { storiesOf } from '@storybook/react';
import Icon from '../../../packages/react-mui/src/Icon';


storiesOf('React-UI/Data Display/Icons', module)
  .add('default', () => {
    return (
      <div>
        <Icon color="primary">
          add_circle
        </Icon>
      </div>
    );
  });
