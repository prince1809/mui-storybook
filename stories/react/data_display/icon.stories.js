import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';

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
