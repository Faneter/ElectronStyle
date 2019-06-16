interface Type {
  "TitleBar.visible"?: boolean;
  "TitleBar.Icon.visible"?: boolean;
  "TitleBar.Title.visible"?: boolean;
  "TitleBar.ButtonBar.visible"?: boolean;
}

/**
 * Modules
 * Node
 * @constant
 */
const events = require("events");
const emit = new events.EventEmitter();
const os = require("os");
/**
 * 标题栏
 * 储存页面的图标,菜单,标题和按钮的可视容器
 */
class TitleBar extends Container {
  private menuBar: MenuBar;
  private buttonBar: ButtonBar;
  private fullScreen: boolean;

  constructor(type?: Type) {
    super();
    this.init(type);
  }
  private layout(): void {}
  /**
   * 初始化菜单栏的:
   * 按钮,
   * 按钮事件,
   * 布局
   */
  private init(type: Type): void {
    if (type != undefined) {
    }
  }
  /**
   * 点击按钮会发生的窗体事件
   *
   * @param type - 事件类型
   *    close : 关闭窗体,
   *    minimize : 最小化窗体,
   *    resize : 最大化或还原窗体
   */
  private clickButton(type: string): void {
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
class ButtonBar extends Container {
  constructor() {
    super();
    this.component.id = "button-bar";
  }
  private init(): void {
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
  private initWindows(): void {
    this.append(this.createButton("minimize"));
    this.append(this.createButton("resize"));
    this.append(this.createButton("close"));
  }
  private initMacOS(): void {}

  private createButton(type: string): Button {
    let button = new Button();
    button.addEventListener("click", function() {
      this.clickButton(type);
    });
    return button;
  }
}
module.exports = TitleBar;
