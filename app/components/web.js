import omit from 'lodash/omit';
import React, {PureComponent} from 'react';
import Reactors, {Text} from 'reactors';

import Icon from './Icon';

export default class IconWeb extends PureComponent {
  render() {
    const props = omit(Reactors.props(this.props), ['color', 'name', 'size']);

    return (
      <Text
        className={`icon-${this.props.name}`}
        {...props}
        style={[
          {display: 'inline'},
          this.props.color && {color: this.props.color},
          this.props.size && {width: this.props.size},
          props.style,
        ]}
      />
    );
  }
}
