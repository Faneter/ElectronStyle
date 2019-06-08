class MenuItem extends Component {
  constructor() {
    super("div");
  }
  public setUI(): void {}
  public setTheme(): void {}
  public getMenuItemElement(): HTMLElement {
    return this.component;
  }
}
