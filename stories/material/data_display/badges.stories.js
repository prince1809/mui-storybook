import React from 'react';

import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { withStyles } from '@material-ui/core';

import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';

import MailIcon from '@material-ui/icons/Mail';

const SimpleBadge = withStyles(
  theme => ({
    margin: {
      margin: theme.spacing(2),
    },
    padding: {
      padding: theme.spacing(0, 2),
    },
  }),
)(({ classes }) => (
  <div>
    <div>
      <Badge className={classes.margin} badgeContent={4} color="primary">
        <MailIcon />
      </Badge>
      <Badge className={classes.margin} badgeContent={10} color="secondary">
        <MailIcon />
      </Badge>
      <IconButton aria-label="4 pending messages" className={classes.margin}>
        <Badge badgeContent={4} color="primary">
          <MailIcon />
        </Badge>
      </IconButton>
    </div>
  </div>
));

storiesOf('Material/Data Display/Badge', module)
  .addDecorator(muiTheme())
  .add('Simple Badge', () => <SimpleBadge />);