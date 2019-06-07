/**
 * 容器
 * 可以储存组件
 */
class Container extends Component {
  components: Component[];
  container: HTMLDivElement;
  constructor() {
    super();
    this.container = document.createElement("div");
    this.components = new Array();
  }
  /**
   * 为容器添加组件
   * TODO: 添加组件
   *
   * @param {Component} comp - 要添加的组件
   */
  public append(comp): void {
    this.components.join(comp);
  }
  /**
   * 获取所有组件
   *
   * @returns 所有组件
   */
  getComponents(): Component[] {
    return this.components;
  }
}
module.exports = Container;
