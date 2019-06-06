class Menu {
    /**
     * 创建一个菜单
     * 
     * @param {JSON} menu - 遵循Electron Menu 规范的JSON
     */
    constructor(menu) {
        this.menu = document.createElement("li");
    }
    /**
     * 为菜单添加一个子菜单项
     * 
     * @param {MenuItem} menuItem - 菜单项
     */
    appendMenuItem(menuItem) {
        // TODO: 添加子菜单项的代码
    }
    getMenuElement() {
        return this.menu;
    }
}
