import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Icon from '@material-ui/core/Icon'

storiesOf('Icon', module)
  .add('default', () => <Icon>star</Icon>);
