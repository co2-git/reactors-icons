import React, {Component} from 'react';
import _ from 'lodash';
import Icon from './Icon';
import {Gesture} from 'reactors';

const HREF = 'node_modules/reactors-icons/assets/' +
  'font-awesome/css/font-awesome.min.css';

export default class IconWeb extends Component {
  componentWillMount() {
    if (typeof window === 'object') {
      const href = Icon.href || HREF;
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.querySelector('head').appendChild(link);
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
