class UI {
    constructor(csspath, styleName) {
        this.css = document.createElement("link");
        this.styleName = styleName;
        this.css.setAttribute("rel", "stylesheet");
        this.css.setAttribute("href", csspath);
        this.css.setAttribute("type", "text/css");
        document.head.appendChild(this.css);
    }
    getStyleName() {
        return this.styleName;
    }
}
