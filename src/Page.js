class Page {
    // 创建对象
    constructor() {
        this.titleBar = document.getElementById("titleBar");
        if (!titleBar) {
            titleBar = document.createElement("section");
            var attr = document.createAttribute("id");
            attr.value = "titleBar";
            titleBar.setAttribute(attr);
        }
        this.icon = document.getElementById("icon");
        if (!icon) {
            if (osType != "Darwin") {
                icon = document.createElement("section");
                var attr = document.createAttribute("id");
                attr.value = "icon";
                icon.setAttribute(attr);
                titleBar.appendChild(icon);
            }
        }
        this.menus = document.getElementById("menus");
        if (!menus) {
            if (osType != "Darwin") {
                menus = document.createElement("section");
                var attr = document.createAttribute("id");
                attr.value = "menus";
                menus.setAttribute(attr);
                titleBar.appendChild(menus);
            }
        }
        this.title = document.getElementById("title");
        if (!title) {
            title = document.createElement("section");
            var attr = document.createAttribute("id");
            attr.value = "title";
            title.setAttribute(attr);
            titleBar.appendChild(title);
        }
        this.buttons = document.getElementById("buttons");
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
        if (osType != "Darwin") {
            showTitleBar();
        }
        this.menus.appendChild(menu);
    }
    showTitleBar() {
        document.body.appendChild(titleBar);
    }
}
module.exports = Page;
