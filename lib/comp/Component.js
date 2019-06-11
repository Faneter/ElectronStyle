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
     * @param {UI} ui - 要设置的组件的UI
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
    setTheme(theme) { }
    addEventListener(type, listener) {
        this.getElement().addEventListener(type, listener);
    }
    removeEventListener(type, listener) {
        this.getElement().removeEventListener(type, listener);
    }
}
module.exports = Component;
