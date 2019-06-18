import React from 'react';

import { storiesOf } from '@storybook/react';
import { withStyles } from '@material-ui/core';
import { muiTheme } from 'storybook-addon-material-ui';
import { State, Store } from "@sambego/storybook-state";

import Checkbox from '@material-ui/core/Checkbox';


const DefaultCheckboxes = withStyles(
  theme => ({

  })
)(({ classes }) => {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <div>
      <Checkbox
        checked={state.checkedA}
        onChange={handleChange('checkedA')}
        value="checkedA"
        inputProps={{
          'aria-label': 'primary checkbox'
        }}
      />
      <Checkbox
        checked={state.checkedB}
        onChange={handleChange('checkedB')}
        value="checkedB"
        color="primary"
        inputProps={{
          'aria-label': 'secondary checkbox',
        }}
      />
      <Checkbox
        value="checkedC"
        inputProps={{
          'aria-label': 'uncontrolled-checkbox',
        }}
      />
      <Checkbox
        disabled
        value="checkedD"
        inputProps={{
          'aria-label': 'disabled checkbox',
        }}
      />
      <Checkbox
        disabled
        checked
        value="checkedE"
        inputProps={{
          'aria-label': 'disabled checked checkbox',
        }}
      />
      <Checkbox
        checked={state.checkedF}
        onChange={handleChange('checkedF')}
        value="checkedF"
        indeterminate
        inputProps={{
          'aria-label': 'indeterminate checkbox',
        }}
      />
      <Checkbox
        defaultChecked
        color="default"
        value="checkedG"
        inputProps={{
          'aria-label': 'checkbox with default color',
        }}
      />
    </div>
  );
});

storiesOf('Inputs/Checkboxes', module)
  .addDecorator(muiTheme())
  .add('Default', () => <DefaultCheckboxes />);