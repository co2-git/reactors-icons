import React from 'react';
import {createIconSetFromFontello} from 'react-native-vector-icons';
import IconAwesome from 'react-native-vector-icons/FontAwesome';

export default function _Icon(props) {
  const Icon = createIconSetFromFontello(`${Icon.source}/config.json`);
  switch (props.vendor) {
  case 'fontawesome':
    return <IconAwesome {...props}/>;
  case 'fontelloButton':
    return <Icon.Button {...props}/>;
  default:
    return <Icon {...props} />;
  }
}
