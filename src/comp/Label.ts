/**
 * 标签
 * 可带有文本和图标等
 */
class Label extends Component{
    /**
     * 创建一个不包含任何东西的标签
     */
    constructor() {
        this.label = document.createElement("section");
    }
    /**
     * 创建一个带有文本的标签
     * 
     * @param {string} text - 标签文本
     */
    constructor(text) {
        this.label = document.createElement("section");
        setText(text);
    }
    /**
     * 设置标签文本
     * 
     * @param {string} text - 标签文本
     */
    setText(text) {
        this.label.innerText = text;
    }
}