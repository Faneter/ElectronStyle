/**
 * 组件
 */
class Component {
    constructor(type) {
        this.component = document.createElement(type);
        Manager.addComp(this);
    }
    getElement() {
        return this.component;
    }
    getUI() {
        return this.ui;
    }
    /**
     * 设置组件UI
     *
     * @param ui - 要设置的组件的UI
     */
    setUI(ui) {
        var lastUIName = this.ui.getStyleName();
        if (ui != null) {
            this.ui = ui;
        }
        var css = this.getElement().getAttribute("class");
        if (css.indexOf(lastUIName) > -1) {
            css.replace(lastUIName, css);
        }
        else {
            css = css + " " + ui.getStyleName();
            this.getElement().setAttribute("class", css);
        }
    }
    /**
     * 设置组件主题
     *
     * @param theme - 要设置的组件主题
     */
    setTheme(theme) {
        var lastThemeName = this.theme.getStyleName();
        if (theme != null) {
            this.theme = theme;
        }
        var css = this.getElement().getAttribute("class");
        if (css.indexOf(lastThemeName) > -1) {
            css.replace(lastThemeName, css);
        }
        else {
            css = css + " " + theme.getStyleName();
            this.getElement().setAttribute("class", css);
        }
    }
    addEventListener(type, listener) {
        this.getElement().addEventListener(type, listener);
    }
    removeEventListener(type, listener) {
        this.getElement().removeEventListener(type, listener);
    }
}
module.exports = Component;
