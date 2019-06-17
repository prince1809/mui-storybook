import React from 'react';

import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';


import imageFile from '../static/images/avatar/1.png';

const action = msg => () => console.log(msg);

const styles = {
  avatar: {
    margin: 10,
    width: 50,
    height: 50,
  },
  bigAvatar: {
    margin: 10,
    width: 100,
    height: 100,
  },
};

const comp = ({ classes, variant }) => (
  <Grid container justify="center" alignItems="center">
    <Avatar alt="Jon Doe" src={imageFile} className={classes.avatar} />
    <Avatar alt="Jon Doe" src={imageFile} className={classes.bigAvatar} />
  </Grid>
);
const MaterialComponent = withStyles(styles)(comp);

storiesOf('Avatars', module)
  .addDecorator(muiTheme())
  .add('default', () => <MaterialComponent />);