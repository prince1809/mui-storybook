import React from 'react';

import { storiesOf } from '@storybook/react';
import { withStyles } from '@material-ui/core';
import { muiTheme } from 'storybook-addon-material-ui';
import { State, Store } from "@sambego/storybook-state";

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RestoreIcon from '@material-ui/icons/Restore';
import { grey } from '@material-ui/core/colors';


const DefaultBottomNavigation = withStyles(
  theme => ({
    root: {
      width: 500,
      backgroundColor: '#F2F2F2'
    },
  })
)(({ classes }) => {
  const [value, setValue] = React.useState(0);
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
});

storiesOf('Navigation/Bottom', module)
  .addDecorator(muiTheme())
  .add('Bottom', () => <DefaultBottomNavigation />);