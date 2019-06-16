/**
 * 主题
 * 用来定义组件的颜色
 * 例如:背景色,动画,模糊等
 */
class Theme {
    constructor(cssPath, styleName) {
        this.css = document.createElement("link");
        this.styleName = styleName;
        this.css.setAttribute("rel", "stylesheet");
        this.css.setAttribute("href", cssPath);
        this.css.setAttribute("type", "text/css");
        document.head.appendChild(this.css);
    }
    getStyleName() {
        return this.styleName;
    }
}
module.exports = Theme;
