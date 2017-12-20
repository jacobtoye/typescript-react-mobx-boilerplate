import * as React from 'react';

const renderDevTools = () => {
  if (process.env.NODE_ENV !== 'production') {
    const DevTools = require('mobx-react-devtools').default;
    return (<DevTools />);
  }
  return null;
};

export const Root: React.SFC<{}> = (props) => {
  return (
    <div>
      {props.children}
      {renderDevTools()}
    </div>
  );
};

export default Root;
