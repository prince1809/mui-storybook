import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { withStyles } from '@material-ui/styles';
import { action } from '@storybook/addon-actions';

import Chip from '@material-ui/core/Chip';
import { Avatar } from '@material-ui/core';

import imageFile from '../static/images/avatar/1.png';

const DefaultChips = withStyles(
  theme => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    chip: {
      margin: theme.spacing(1),
    }
  }),
)(({ classes }) => (
  <div className={classes.root}>
    <Chip label="Basic chip" className={classes.chip} />
    <Chip
      avatar={<Avatar>MB</Avatar>}
      label="Clickable chip"
      onClick={action('You clicked the Chip.')}
      className={classes.chip} />
    <Chip
      avatar={<Avatar alt="Natcha" src={imageFile} />}
      label="Decorator Chip"
      onDelete={action('You delete the chip')}
      className={classes.chip}
    />
  </div>
))

storiesOf('Chips', module)
  .addDecorator(muiTheme())
  .add('default', () => <DefaultChips />);