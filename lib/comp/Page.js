class Page extends Container {
    // 创建对象 TODO: 系统适配
    constructor(type) {
        super();
        this.titleBar = new ElectronStyle.TitleBar();
    }
    init() { }
    createTitleBar() {
        return new ElectronStyle.TitleBar();
    }
    setTitleBar(titleBar) { } // TODO:
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
