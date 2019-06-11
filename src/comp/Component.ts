/**
 * 组件
 */ 
abstract class Component {
  protected component: HTMLElement;
  protected ui: UI;
  constructor(type: string) {
    this.component = document.createElement(type);
    Manager.addComp(this);
  }
  public getElement(): Element {
    return this.component;
  }
  public getUI(): UI {
    return this.ui;
  }
  /**
   * 设置组件UI
   *
   * @param {UI} ui - 要设置的组件的UI
   */
  public setUI(ui: UI): void {
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
  public setTheme(theme: Theme): void {}
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
