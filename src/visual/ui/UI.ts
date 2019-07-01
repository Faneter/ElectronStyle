namespace ElectronStyle {
  /**
   * UI,
   * 用来定义组件的:
   * 布局,
   * 样式,
   * 颜色等.
   */
  export class UI {
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
    public getStyleName(): string {
      return this.styleName;
    }
  }
}
module.exports = ElectronStyle.UI;
