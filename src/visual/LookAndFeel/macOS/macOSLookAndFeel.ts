namespace ElectronStyle {
  export class macOSLookAndFeel implements ElectronStyle.LookAndFeel {
    public getUI(): ElectronStyle.UI {
      return new ElectronStyle.UI("css/macOS.css", "macOS");
    }
    public init(titleBar: ElectronStyle.TitleBar): void {}
  }
  class ControlButton extends Component {
    constructor(type: string) {
      super(type + "-button");
    }
    /**
     * 点击按钮会发生的窗体事件
     *
     * @param type - 事件类型
     *    close : 关闭窗体,
     *    minimize : 最小化窗体,
     *    resize : 最大化或还原窗体
     */
    public static clickButton(type: string): void {
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
    public init() {
      this.append(this.createControlButton("minimize"));
      this.append(this.createControlButton("maximize"));
      this.append(this.createControlButton("close"));
    }
    protected createControlButton(type: string): ControlButton {
      let button = new ControlButton(type);
      button.addEventListener("click", function() {
        ControlButton.clickButton(type);
      });
      return button;
    }
  }
}
