import { observable, action, runInAction } from 'mobx';
import { RouterStore } from 'mobx-react-router';

import { Routes } from 'enums';
import {
  UiStateStore,
  UserStore,
} from 'stores';

export class AuthStore {
  @observable
  public isLoggedIn: boolean = false;

  constructor(routerStore, uiStateStore, userStore) {
    this.routerStore = routerStore;
    this.uiStateStore = uiStateStore;
    this.userStore = userStore;

    const localStorageIsLoggedIn = localStorage.getItem('isLoggedIn');
    if (localStorageIsLoggedIn)
      this.isLoggedIn = localStorageIsLoggedIn === 'true';
  }

  private routerStore: RouterStore;
  private uiStateStore: UiStateStore;
  private userStore: UserStore;

  @action.bound
  login() {
    // TODO: add in whatever auth you need
    localStorage.setItem('isLoggedIn', 'true');
    this.isLoggedIn = true;

    this.routerStore.history.replace('/');
  }

  @action.bound
  logout() {
    this.userStore.clear();

    this.uiStateStore.reset();

    localStorage.removeItem('isLoggedIn');
    this.isLoggedIn = false;
  }
}

export default AuthStore;
