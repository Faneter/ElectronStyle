/**
 * Modules
 * Node
 * @constant
 */
const events = require("events");
const emit = new events.EventEmitter();
const os = require("os");
var ElectronStyle;
(function (ElectronStyle) {
    /**
     * 标题栏
     * 储存页面的图标,菜单,标题和按钮的可视容器
     */
    class TitleBar extends Container {
        constructor() {
            super();
            this.init();
        }
        /**
         * 初始化菜单栏的:
         * 按钮,
         * 按钮事件,
         * 布局
         */
        init() { }
        getType() {
            return "title-bar";
        }
        /**
         * 点击按钮会发生的窗体事件
         *
         * @param type - 事件类型
         *    close : 关闭窗体,
         *    minimize : 最小化窗体,
         *    resize : 最大化或还原窗体
         */
        clickButton(type) {
            switch (type) {
                // 关闭窗体
                case "close":
                    emit("close");
                    break;
                // 最小化窗体
                case "minimize":
                    emit("minimize");
                    break;
                // 最大化或还原窗体
                case "resize":
                    if (this.fullScreen) {
                        emit("maximize");
                    } // Resize to Fullscreen
                    else {
                        emit("fullscreen");
                    }
                    this.fullScreen = !this.fullScreen;
                    break;
                default:
            }
        }
    }
    ElectronStyle.TitleBar = TitleBar;
    class ControlButton extends Component {
        constructor(type) {
            super(type + "-button");
        }
    }
    /**
     * 菜单栏
     */
    class MenuBar extends Container {
        constructor() {
            super();
            this.component.id = "menu-bar";
        }
        append(menuItem) {
            if (menuItem instanceof MenuItem) {
                super.append(menuItem);
            }
        }
    }
    class ToolsBar extends Container {
        constructor() {
            super();
        }
    }
    class ControlButtonBar extends Container {
        constructor() {
            super();
            this.component.id = "control-button-bar";
        }
        init() {
            this.append(this.createControlButton("minimize"));
            this.append(this.createControlButton("maximize"));
            this.append(this.createControlButton("close"));
        }
        createControlButton(type) {
            let button = new ControlButton(type);
            button.addEventListener("click", function () {
                this.clickButton(type);
            });
            return button;
        }
    }
})(ElectronStyle || (ElectronStyle = {}));
module.exports = ElectronStyle.TitleBar;
