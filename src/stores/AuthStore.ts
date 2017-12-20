import { observable, action, runInAction } from 'mobx';
import { RouterStore } from 'mobx-react-router';

import { Routes } from 'enums';

export class AuthStore {
  @observable
  public isLoggedIn: boolean = false;

  constructor(routerStore) {
    this.routerStore = routerStore;

    const localStorageIsLoggedIn = localStorage.getItem('isLoggedIn');
    if (localStorageIsLoggedIn)
      this.isLoggedIn = localStorageIsLoggedIn === 'true';
  }

  private routerStore: RouterStore;

  @action.bound
  login() {
    // TODO: add in whatever auth you need
    localStorage.setItem('isLoggedIn', 'true');
    this.isLoggedIn = true;

    this.routerStore.history.replace('/');
  }

  @action.bound
  logout() {
    localStorage.removeItem('isLoggedIn');
    this.isLoggedIn = false;
  }
}

export default AuthStore;
