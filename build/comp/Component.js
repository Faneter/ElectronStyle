/**
 * 组件
 */
class Component {
    constructor(type) {
        this.component = document.createElement(type);
    }
    setUI(ui) {
        var css = this.component.getAttribute("class");
        css = css + " " + ui.getStyleName();
    }
    addEventListener(type, listener) {
        this.component.addEventListener(type, listener);
    }
}
module.exports = Component;
