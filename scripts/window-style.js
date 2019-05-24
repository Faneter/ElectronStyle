const os = require("os");
const osType = os.type();
function page(){
    // 创建对象
    var titleBar = document.getElementById("titleBar");
    if (!titleBar) {
        titleBar = document.createElement("section");
        var attr = document.createAttribute("id");
        attr.value = "titleBar";
        titleBar.setAttribute(attr);
    }
    var icon = document.getElementById("icon");
    if (!icon) {
        if (osType != "Darwin") {
            icon = document.createElement("section");
            var attr = document.createAttribute("id");
            attr.value = "icon";
            icon.setAttribute(attr);
            titleBar.appendChild(icon);
        }
    }
    var menus = document.getElementById("menus");
    if (!menus) {
        if (osType != "Darwin") {
            menus = document.createElement("section");
            var attr = document.createAttribute("id");
            attr.value = "menus";
            menus.setAttribute(attr);
            titleBar.appendChild(menus);
        }
    }
    var title = document.getElementById("title");
    if (!title) {
        title = document.createElement("section");
        var attr = document.createAttribute("id");
        attr.value = "title";
        title.setAttribute(attr);
        titleBar.appendChild(title);
    }
    var buttons = document.getElementById("buttons");
    if (!buttons) {
        if (osType != "Darwin") {
            buttons = document.getElementById("section");
            var attr = document.createAttribute("id");
            attr.value = "buttons";
            buttons.setAttribute(attr);
            titleBar.appendChild(buttons);
        }
    }
    function appendMenu(menu){
        if (osType != "Darwin") {

        }
        /**
         * 在 Electron 中
         * 构建一个菜单的 json 格式是这样的:
         * *
         * {
         *   label:string,
         * 
         * }
         * *
         * 
         * @param {*} menujson 
         */
        function getMenus(menujson){

        }
        function getSubMenus(){

        }
    }
    function showTitleBar(){
        document.body.appendChild(titleBar);
    }
}
