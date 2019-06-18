import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { withStyles } from '@material-ui/styles';
import { action } from '@storybook/addon-actions';

import Chip from '@material-ui/core/Chip';
import { Avatar } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

import imageFile from '../../static/images/avatar/1.png';

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
      label="Deletable Chip"
      onDelete={action('You delete the chip')}
      className={classes.chip}
    />
    <Chip
      avatar={<Avatar><FaceIcon /></Avatar>}
      label="Clickable Deletable Chip"
      onClick={action('Ouch! Stop poking')}
      onDelete={action('Stop! You are deleting me')}
      className={classes.chip}
    />

    <Chip label="Custom delete icon chip"
      onClick={action('You clicked me')}
      onDelete={action('You deleted me')}
      className={classes.chip}
      deleteIcon={<DoneIcon />}
    />

    <Chip
      label="Clickable Link Chip"
      className={classes.Chip}
      component="a"
      href="#chip"
      clickable
    />
    <Chip
      avatar={<Avatar>MB</Avatar>}
      label="Primary Clickable Chip"
      clickable
      className={classes.chip}
      color="primary"
      onDelete={action('You delete me')}
      deleteIcon={<DoneIcon />}
    />

    <Chip
      icon={<FaceIcon />}
      label="Primary Clickable Chip"
      clickable
      className={classes.chip}
      color="primary"
      onDelete={action('You delete me')}
      deleteIcon={<DoneIcon />}
    />
    <Chip
      label="Deletable Primary Chip"
      onDelete={action('You delete me')}
      className={classes.chip}
      color="primary"
    />
    <Chip
      avatar={
        <Avatar>
          <FaceIcon />
        </Avatar>
      }
      label="Deletable Secondary Chip"
      onDelete={action('You delete me')}
      className={classes.chip}
      color="secondary"
    />
    <Chip
      icon={<FaceIcon />}
      label="Deletable Secondary Chip"
      onDelete={action('You delete me')}
      className={classes.chip}
      color="secondary"
    />

  </div>
))

storiesOf('Data Display/Chips', module)
  .addDecorator(muiTheme())
  .add('default', () => <DefaultChips />);