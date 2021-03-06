![](https://imgur.com/7XHxSzk.gif)

### Dreamy Components

Sentry Dreamy Components are a series of stateless, purposeless, and contextless pieces of styled jsx; they are designed 
to build product illustrations that are fun, active, and don't use a lot of bytes. Think of it like jsx-as-svg.

Because they are written in pure jsx, these components can also be rendered down to flat html without any side-effects. This
makes them easy to import and use in static sites. You can find the static files in the `static_components` directory.

Development is done using storybook which boots up on `npm start`. To regenerate static files, run `npm run static`.


### Setup

In the console:

```
yarn add sentry-dreamy-components
```

and in your file:

```jsx
import {BashCard} from 'sentry-dreamy-components';
import styled from 'react-emotion';

const StyledBashCard = styled(BashCard)`
  width: 500px; // components have a flexible width
  font-size: 1.5em;  // components use ems and can be scaled up and down
`;

export default StyledBashCard;
```


