import React from 'react';

import { storiesOf } from '@storybook/react';
import { withStyles } from '@material-ui/core';
import { muiTheme } from 'storybook-addon-material-ui';
import { State, Store } from "@sambego/storybook-state";

import Checkbox from '@material-ui/core/Checkbox';

const store = new Store({

});

const DefaultCheckboxes = withStyles(
  theme => ({

  })
)(({ classes }) => {
  return (
    <div>
      <Checkbox />
    </div>
  );
});

storiesOf('Inputs/Checkboxes', module)
  .addDecorator(muiTheme())
  .add('Default', () => <DefaultCheckboxes />);