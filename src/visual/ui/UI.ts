namespace ElectronStyle {
  /**
   * UI,
   * 用来定义组件的:
   * 布局,
   * 样式,
   * 颜色等.
   */
  export class UI {
<<<<<<< HEAD
    protected styleFile: string;
    protected styleName: string;
    protected layout: any;
    constructor(styleFile: string, styleName: string) {
      this.styleFile = styleFile;
      this.styleName = styleName;
    }
    public getStyleFile(): string {
      return this.styleFile;
    }
=======
    protected type: ElectronStyle.UIType;
    protected styleName: string;
    protected layout: any;
    constructor(type: ElectronStyle.UIType, styleName: string, layout?: any) {
      this.type = type;
      this.styleName = styleName;
    }
>>>>>>> b4934bba499efd60bb594720f74564c591fa59fe
    public getStyleName(): string {
      return this.styleName;
    }
  }
}
module.exports = ElectronStyle.UI;
