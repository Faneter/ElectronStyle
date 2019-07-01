/**
 * Modules
 * Node
 * @constant
 */
const events = require("events");
const emit = new events.EventEmitter();
const os = require("os");

namespace ElectronStyle {
  /**
   * 标题栏
   * 储存页面的图标,菜单,标题和按钮的可视容器
   */
  export class TitleBar extends Container {
    protected fullScreen: boolean;

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
    protected init(): void {}
    public getType(): string {
      return "title-bar";
    }
  }
  // /**
  //  * 菜单栏
  //  */
  // class MenuBar extends Container {
  //   constructor() {
  //     super();
  //     this.component.id = "menu-bar";
  //   }
  //   public append(menuItem: Component) {
  //     if (menuItem instanceof MenuItem) {
  //       super.append(menuItem);
  //     }
  //   }
  // }
}
module.exports = ElectronStyle.TitleBar;
