import { observable, action } from 'mobx'


class Store {

  @observable value

  constructor() {
      this.value = 1
  }

  @action.bound
  add() {
    console.log('1', this.value)
    this.value++
  }
}

export default new Store()