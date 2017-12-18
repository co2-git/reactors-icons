import React, {PureComponent} from 'react';
import Reactors from 'reactors';

export default class Icon extends PureComponent {
  static setSource = href => {
    switch (Reactors.platform) {
    default: {
      throw new Error('Unknown reactors platform ' + Reactors.platform);
    }
    case 'web': case 'desktop': {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.querySelector('head').appendChild(link);
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
    }
  };
}
