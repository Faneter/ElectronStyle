/**
 * Modules
 * Node
 * @constant
 */
const events = require("events");
const emit = new events.EventEmitter();
const os = require("os");

namespace ElectronStyle {
<<<<<<< HEAD
=======
  export interface TitleBarType extends ElectronStyle.Type {
    visible?: Visible;
    location?: Location;
  }
>>>>>>> b4934bba499efd60bb594720f74564c591fa59fe
  /**
   * 标题栏
   * 储存页面的图标,菜单,标题和按钮的可视容器
   */
  export class TitleBar extends Container {
<<<<<<< HEAD
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
=======
    protected menuBar: MenuBar;
    protected controlButtonBar: ControlButtonBar;
    protected fullScreen: boolean;

    constructor(type?: TitleBarType) {
      super();
      this.init(type);
    }
    /**
     * 初始化菜单栏的:
     * 按钮,
     * 按钮事件,
     * 布局
     */
    protected init(type: TitleBarType): void {
      if (!type) {
        // 标题栏布局
        if (!type.location) {
        }
      }
    }
    public getType():string {
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
    protected clickButton(type: string): void {
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
  class Button extends Component {
    constructor() {
      super("button");
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
    public append(menuItem: Component) {
      if (menuItem instanceof MenuItem) {
        super.append(menuItem);
      }
    }
  }
  class ControlButtonBar extends Container {
    constructor() {
      super();
      this.component.id = "button-bar";
    }
    protected init(): void {
      const platformName = os.platform();
      switch (platformName) {
        case "Windows_NT":
          this.initWindows();
          break;
        case "Darwin":
          this.initMacOS();
          break;
        default:
          this.initWindows();
      }
    }
    protected initWindows(): void {
      this.append(this.createButton("minimize"));
      this.append(this.createButton("resize"));
      this.append(this.createButton("close"));
    }
    protected initMacOS(): void {}

    protected createButton(type: string): Button {
      let button = new Button();
      button.addEventListener("click", function() {
        this.clickButton(type);
      });
      return button;
    }
  }
>>>>>>> b4934bba499efd60bb594720f74564c591fa59fe
}
module.exports = ElectronStyle.TitleBar;
