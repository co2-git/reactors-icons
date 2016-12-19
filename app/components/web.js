import React, {Component} from 'react';
import _ from 'lodash';
import Icon from './Icon';
import {Gesture} from 'reactors';

export default class IconWeb extends Component {
  componentWillMount() {
    if (typeof window === 'object') {
      if (Icon.href) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = Icon.href;
        document.querySelector('head').appendChild(link);
      } else {
        console.warn('reactors-icons: no href set');
      }
    }
  }
  render() {
    const className = ['fa', `fa-${this.props.name}`, this.props.className];
    const handlers = Gesture.handlers(this.props);
    const props = _.omit({...handlers}, [
      'vendor', 'name', 'size'
    ]);
    return (
      <span
        className={className.join(' ')}
        {...props}
        />
    );
  }
}
