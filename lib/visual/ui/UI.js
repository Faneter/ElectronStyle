var ElectronStyle;
(function (ElectronStyle) {
    /**
     * UI,
     * 用来定义组件的:
     * 布局,
     * 样式,
     * 颜色等.
     */
    class UI {
        constructor(styleFile, styleName) {
            this.styleFile = styleFile;
            this.styleName = styleName;
        }
        getStyleFile() {
            return this.styleFile;
        }
        getStyleName() {
            return this.styleName;
        }
    }
    ElectronStyle.UI = UI;
})(ElectronStyle || (ElectronStyle = {}));
module.exports = ElectronStyle.UI;
