import React, {Component} from 'react';
import _ from 'lodash';
import Icon from './Icon';
import {Gesture} from 'reactors';

export default class IconWeb extends Component {
  componentWillMount() {
    if (typeof window === 'object') {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = Icon.href;
      document.querySelector('head').appendChild(link);
    }
  }
  render() {
    const className = ['fa', `fa-${this.props.name}`, this.props.className];
    const handlers = Gesture.handlers({
      onPress: (event) => {
        if (_.isFunction(this.props.onPress)) {
          this.props.onPress(event);
        }
      },
    });
    return <span
      className={className.join(' ')}
      {..._.omit(this.props, ['vendor', 'name', 'size', 'onPress'])}
      {...handlers}
      />;
  }
}
