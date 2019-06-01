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
        /**
         * 为页面添加菜单
         * 
         * @param {string} type - 菜单的类型
         * @param {Menu} menu - 菜单
         */
        function appendMenu(type, menu) {
            if (osType != "Darwin") {

            }
            /**
             * 在 Electron 中
             * 构建一个菜单的 json 格式是这样的:
             * {
             *   label:string,       // 菜单名
             *   submenu:arr[],      // 子菜单
             *   accelerator:string  // 快捷键
             * }
             * 所以我们可以根据这个json来实例一个菜单
             * 
             * @param {JSON} menujson 
             */
            function createMenu(menujson) {
                var label = menujson.label;
                var submenus = menujson.submenu;
                var accelerator = menujson.accelerator;

            }
        }
        function showTitleBar() {
            document.body.appendChild(titleBar);
        }
    }
}
module.exports = Page;