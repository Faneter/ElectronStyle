/**
 * 组件
 */
abstract class Component {
  protected component: HTMLElement;
  constructor(type: string) {
    this.component = document.createElement(type);
    Manager.addComp(this);
  }
  public setUI(ui: UI): void {
    var css = this.component.getAttribute("class");
    css = css + " " + ui.getStyleName();
  }
  public abstract setTheme(): void;
  public addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject
  ): void {
    this.component.addEventListener(type, listener);
  }
}
module.exports = Component;
