import { observable, action, runInAction } from 'mobx';

import * as ApiClient from 'api';
import { User } from 'models';

export class UserStore {
  @observable
  public user: User = null;

  @action.bound
  async fetch() {
    // Here you could pass through the token from auth
    const user = await ApiClient.fetchUser(1);

    runInAction(() => {
      this.user = user;
    });
  }
}

export default UserStore;
