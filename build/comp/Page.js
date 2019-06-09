class Page extends Container {
    setUI() {
        throw new Error("Method not implemented.");
    }
    setTheme() {
        throw new Error("Method not implemented.");
    }
    // 创建对象 TODO: 系统适配
    constructor() {
        this.titleBar = document.getElementById("title-bar"); // 标题栏
        if (!titleBar) {
            titleBar = document.createElement("div");
            var attr = document.createAttribute("id");
            attr.value = "titleBar";
            titleBar.setAttribute(attr);
        }
        this.icon = document.getElementById("icon"); // 应用图标
        if (!icon) {
            if (osType != "Darwin") {
                icon = document.createElement("img");
                var attr = document.createAttribute("id");
                attr.value = "icon";
                icon.setAttribute(attr);
                titleBar.appendChild(icon);
            }
        }
        this.menuBar = document.getElementById("menuBar"); // 菜单
        if (!menuBar) {
            if (osType != "Darwin") {
                this.menuBar = document.createElement("ul");
                var attr = document.createAttribute("id");
                attr.value = "menus";
                this.menuBar.setAttribute(attr);
                titleBar.appendChild(this.menuBar);
            }
        }
        this.title = document.getElementById("title"); // 标题
        if (!title) {
            title = document.createElement("section");
            var attr = document.createAttribute("id");
            attr.value = "title";
            title.setAttribute(attr);
            titleBar.appendChild(title);
        }
        this.buttons = document.getElementById("buttons"); // 按钮栏
        if (!buttons) {
            if (osType != "Darwin") {
                buttons = document.getElementById("section");
                var attr = document.createAttribute("id");
                attr.value = "buttons";
                buttons.setAttribute(attr);
                titleBar.appendChild(buttons);
            }
        }
    }
    /**
     * 为页面添加一个菜单
     *
     * @param {Menu} menu - 菜单
     */
    appendMenu(menu) {
        var menuElement = menu.getMenuElement();
        if (osType != "Darwin") {
            this.menus.appendChild(menuElement);
        }
    }
    /**
     * 显示标题栏
     */
    showTitleBar() {
        document.body.appendChild(titleBar);
    }
}
module.exports = Page;
