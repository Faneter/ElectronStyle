class MenuItem {
    /**
     * 
     * @param {JSON} menuItem - 遵循Electron MenuItem 规范的JSON
     */
    constructor(menuItem) {
        this.menuItem = document.createElement("li");
    }
    getMenuItemElement() {
        return this.menuItem;
    }
}