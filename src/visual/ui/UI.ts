namespace ElectronStyle {
  /**
   * UI,
   * 用来定义组件的:
   * 布局,
   * 样式,
   * 颜色等.
   */
  export class UI {
    protected type: ElectronStyle.UIType;
    protected styleName: string;
    protected layout: any;
    constructor(type: ElectronStyle.UIType, styleName: string, layout?: any) {
      this.type = type;
      this.styleName = styleName;
    }
    public getStyleName(): string {
      return this.styleName;
    }
  }
}
module.exports = ElectronStyle.UI;
