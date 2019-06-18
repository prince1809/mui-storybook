import React from 'react';
import { withStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { action } from '@storybook/addon-actions';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

function handleClick(event) {
  event.preventDefault();
  alert('You clicked a breadcrumb.');
}
const SimpleBreadcrumbs = withStyles(
  theme => ({
    root: {
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    paper: {
      padding: theme.spacing(1, 2),
      backgroundColor: '#F2F2F2'
    },
  }),
)(({ classes }) => (
  <div className={classes.root}>
    <Paper elevation={0} className={classes.paper}>
      <Breadcrumbs aria-label="Breadcrumb">
        <Link color="inherit" href="#" onClick={handleClick}>
          Material-UI
        </Link>
        <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
          Core
          </Link>
        <Typography color="textPrimary">Breadcrumb</Typography>
      </Breadcrumbs>
    </Paper>
  </div>
));

storiesOf('Navigation/Breadcrumbs', module)
  .addDecorator(muiTheme())
  .add('Simple', () => <SimpleBreadcrumbs />)