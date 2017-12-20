import { observable, action } from 'mobx';

import { BootingState } from 'enums';

export class UiStateStore {
  @observable
  public bootingState: BootingState = BootingState.INITIAL;
  
  @action.bound
  setBooting(bootingState: BootingState) {
    this.bootingState = bootingState;
  }

  @action.bound
  reset() {
    this.bootingState = BootingState.INITIAL;
  }
}

export default UiStateStore;
