class MenuItem extends Container {
    /**
     * TODO: 添加对多类型的支持
     *
     * @param type - 菜单项类型
     *
     */
    constructor(type) {
        super();
    }
    append(menuItem) {
        if (menuItem instanceof MenuItem) {
            super.append(menuItem);
        }
    }
}
module.exports = MenuItem;
