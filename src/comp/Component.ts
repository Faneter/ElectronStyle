/**
 * 组件
 */
class Component {
  protected type: string;
  protected component: HTMLElement;
  protected ui: ElectronStyle.UI;
  constructor(type: string) {
    this.type = type;
    this.component = document.createElement(type);
    Manager.addComp(this);
  }
  public getType(): string {
    return this.type;
  }
  public getElement(): Element {
    return this.component;
  }
  public getUI(): ElectronStyle.UI {
    return this.ui;
  }
  /**
   * 设置组件UI
   *
   * @param ui - 要设置的组件的UI
   */
  public setUI(ui: ElectronStyle.UI): void {
    var lastUIName = this.ui.getStyleName();
    if (ui != null) {
      this.ui = ui;
    }
    var css = this.getElement().getAttribute("class");
    if (css.indexOf(lastUIName) > -1) {
      css.replace(lastUIName, css);
    } else {
      css = css + " " + ui.getStyleName();
      this.getElement().setAttribute("class", css);
    }
  }
  public addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject
  ): void {
    this.getElement().addEventListener(type, listener);
  }
  public removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject
  ): void {
    this.getElement().removeEventListener(type, listener);
  }
}
module.exports = Component;
