export class Store {
  private subscribes: Function[];
  private reducers: { [key: string]: Function };
  private state: { [key: string]: any };

  constructor(reducers = {}, initialState = {}) {
    this.state = initialState;
  }

  get value() {
    return this.state;
  }
}
