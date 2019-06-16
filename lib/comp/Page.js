class Page extends Container {
    // 创建对象 TODO: 系统适配
    constructor() {
        super();
        this.titleBar = new TitleBar();
    }
    /**
     * 为页面添加一个菜单
     *
     * @param menu - 菜单
     */
    appendMenu(menu) {
        // this.titleBar
    }
}
module.exports = Page;
