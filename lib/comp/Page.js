class Page extends Container {
    // 创建对象 TODO: 系统适配
    constructor(type) {
        super();
        this.titleBar = new ElectronStyle.TitleBar();
    }
    init() { }
    createTitleBar() {
<<<<<<< HEAD
<<<<<<< HEAD
        return new ElectronStyle.TitleBar();
=======
        return new TitleBar();
>>>>>>> b4934bba499efd60bb594720f74564c591fa59fe
=======
        return new TitleBar();
>>>>>>> b4934bba499efd60bb594720f74564c591fa59fe
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
