class UI {
  private css: HTMLLinkElement;
  private styleName: string;
  constructor(csspath: string, styleName: string) {
    this.css = document.createElement("link");
    this.styleName = styleName;
    this.css.setAttribute("rel", "stylesheet");
    this.css.setAttribute("href", csspath);
    this.css.setAttribute("type", "text/css");
    document.head.appendChild(this.css);
  }
  public getStyleName(): string {
    return this.styleName;
  }
}
