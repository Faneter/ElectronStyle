class UI {
  private css: HTMLLinkElement;
  private compName: string;
  constructor(csspath: string, compName: string) {
    this.css = document.createElement("link");
    this.compName = compName;
    this.css.setAttribute("rel", "stylesheet");
    this.css.setAttribute("href", csspath);
    this.css.setAttribute("type", "text/css");
    document.head.appendChild(this.css);
  }
}
