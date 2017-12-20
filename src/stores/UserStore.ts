import { observable, action, runInAction } from 'mobx';

import { User } from 'models';

export class UserStore {
  @observable
  public user: User = null;

  @action.bound
  async fetch() {
    // TODO: usually we would fetch the user via an API
    this.user = {
      id: 1,
      userName: 'jacob.toye',
      firstName: 'Jacob',
      lastName: 'Toye',
    };
  }
}

export default UserStore;
