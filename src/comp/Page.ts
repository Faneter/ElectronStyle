class Page extends Container {
  protected titleBar: ElectronStyle.TitleBar;
  // 创建对象 TODO: 系统适配
  constructor() {
    super();
    this.titleBar = new ElectronStyle.TitleBar();
  }
  protected init() {}
  protected createTitleBar(): ElectronStyle.TitleBar {
    return new ElectronStyle.TitleBar();
  }
  public setTitleBar(titleBar: ElectronStyle.TitleBar): void {} // TODO:
  /**
   * 为页面添加一个菜单
   *
   * @param menu - 菜单
   */
  appendMenu(menu) {
    // this.titleBar TODO:
  }
}
module.exports = Page;
