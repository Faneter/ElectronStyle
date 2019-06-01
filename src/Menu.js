class Menu {
    /**
     * 创建一个菜单对象
     * 
     * @param {JSON} menu - 遵循ELectron Menu 规范的JSON
     */
    constructor(menu) {
        this.menu = document.createElement("li");
    }
    appendMenuItem() {

    }
    getMenuElement() {
        return this.menu;
    }
}
