import { observable, action } from 'mobx';

import { BootingState } from 'enums';

export class UiStateStore {
  @observable
  public bootingState: BootingState = BootingState.INITIAL;
  
  @action
  setBooting(bootingState: BootingState) {
    this.bootingState = bootingState;
  }
}

export default UiStateStore;
