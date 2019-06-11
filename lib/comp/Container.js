/**
 * 容器
 * 可以储存组件
 */
class Container extends Component {
    constructor() {
        super();
        this.container = document.createElement("div");
        this.components = new Array();
    }
    /**
     * 为容器添加组件
     * TODO: 添加组件
     *
     * @param {Component} comp - 要添加的组件
     */
    append(comp) {
        this.components.join(comp);
    }
    /**
     * 获取所有组件
     *
     * @returns 所有组件
     */
    getComponents() {
        return this.components;
    }
}
module.exports = Container;
