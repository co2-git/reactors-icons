reactors-icons
===

Icons set for [reactors](https://github.com/co2-git/reactors). Uses [fontello](http://fontello.com).

# Install

Add the following to your package.json:

```json
  "rnpm": {
    "assets": [
	     "./assets/fontello/font"
    ]
  }
```

Then:

```bash
yarn add reactors-icons
react-native link react-native-vector-icons
```

Don't forget to rebuild for mobile platforms.

# Usage

```jsx
import Icon from 'reactors-icons';
import iconConfig from './assets/fontello/config.json';

Icon.setSource({
  web: './assets/fonts/fontello.css',
  desktop: 'assets/fonts/fontello.css',
  mobile: {
    config: iconConfig
  }
});

<Icon name="user" size={32} />
```

# Props

- string `name`
- number? `size`
- string? `color`
