import React from 'react';
import Reactors from 'reactors';
import IconWeb from './web';

export default function Icon(props) {
  switch (Reactors.platform) {

  default: {
    throw new Error('Unknown reactors platform ' + Reactors.platform);
  }

  case 'web': case 'desktop': {
    return <IconWeb {...props} />;
  }

  case 'mobile': case 'ios': case 'android': {
    const {Text} = require('react-native');
    return <Text>MOBILE ICON</Text>;
  }
  }
}
