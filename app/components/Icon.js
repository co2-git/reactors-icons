import React, {PureComponent} from 'react';
import Reactors from 'reactors';

let IconMobile;

export default class Icon extends PureComponent {
  static setSource = href => {
    switch (Reactors.platform) {
    default: {
      throw new Error('Unknown reactors platform ' + Reactors.platform);
    }
    case 'web': case 'desktop': {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href[Reactors.platform];
      document.querySelector('head').appendChild(link);
    }
    case 'mobile': {
      const {createIconSetFromFontello} = require('react-native-vector-icons');
      IconMobile = createIconSetFromFontello(href.mobile.config, href.font);
    }
    }
  };
  render = () => {
    switch (Reactors.platform) {
    default: {
      throw new Error('Unknown reactors platform ' + Reactors.platform);
    }
    case 'web': case 'desktop': {
      const IconWeb = require('./web').default;
      return <IconWeb {...this.props} />;
    }
    case 'mobile': {
      return <IconMobile {...this.props} />;
    }
    }
  };
}
