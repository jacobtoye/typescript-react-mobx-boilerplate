import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { Router, Route } from 'react-router';

import { Stores } from 'enums';
import { AuthStore, UiStateStore, UserStore } from 'stores';

import Root from './containers/Root';
import App from './containers/App';

import 'index.css';

// enable MobX strict mode
useStrict(true);

// prepare MobX stores
const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();
const uiStateStore = new UiStateStore();
const userStore = new UserStore();
const authStore = new AuthStore(routingStore, uiStateStore, userStore);

const stores = {
  [Stores.AUTH]: authStore,
  [Stores.ROUTER]: routingStore,
  [Stores.UI_STATE]: uiStateStore,
  [Stores.USER]: userStore,
};

const history = syncHistoryWithStore(browserHistory, routingStore);

ReactDOM.render(
  <Provider {...stores}>
    <Root>
      <Router history={history}>
        <App />
      </Router>
    </Root>
  </Provider>,
  document.getElementById('app') as HTMLElement,
);
