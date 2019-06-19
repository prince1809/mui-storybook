import React from 'react';
import PropTypes from 'prop-types';
//import classNames from 'classnames';
//import { componentPropType } from '@material-ui/utils';

function Icon(props) {
  const { children, classes, className, color, component: Component, fontSize, ...other } = props;
  return (
    <div>
      {children}
    </div>
  );
}


Icon.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  //olor: PropTypes.oneOf(['inherit', 'primary', 'secondary', 'action', 'error', 'disabled']),
  //component: componentPropType,
  //fontSize: PropTypes.oneOf(['inherit', 'default', 'small', 'large']),
}

Icon.defaultProps = {
  color: 'inherit',
  component: 'span',
  fontSize: 'default',
};


Icon.muiName = 'Icon';

export default Icon;