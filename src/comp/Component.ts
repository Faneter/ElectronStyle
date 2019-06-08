/**
 * 组件
 */
abstract class Component {
  protected component: HTMLElement;
  constructor(type: string) {
    this.component = document.createElement(type);
    this.setUI();
  }
  public abstract setUI(): void;
  public abstract setTheme(): void;
  public addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject
  ): void {
    this.component.addEventListener(type, listener);
  }
}
module.exports = Component;
