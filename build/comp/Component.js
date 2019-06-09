/**
 * 组件
 */
class Component {
    constructor(type) {
        this.component = document.createElement(type);
        Manager.addComp(this);
    }
    /**
     * 设置组件UI
     *
     * @param {UI} ui - 要设置的组件的UI
     */
    setUI(ui) {
        this.ui = ui;
        var css = this.component.getAttribute("class");
        css = css + " " + ui.getStyleName();
    }
    getUI() {
        return this.ui;
    }
    setTheme(theme) { }
    addEventListener(type, listener) {
        this.component.addEventListener(type, listener);
    }
}
module.exports = Component;
