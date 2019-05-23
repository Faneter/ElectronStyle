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
        icon = document.createElement("section");
        var attr = document.createAttribute("id");
        attr.value = "icon";
        icon.setAttribute(attr);
        titleBar.appendChild(icon);
    }
    var menus = document.getElementById("menus");
    if (!menus) {
        menus = document.createElement("section");
        var attr = document.createAttribute("id");
        attr.value = "menus";
        menus.setAttribute(attr);
        titleBar.appendChild(menus);
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
        buttons = document.getElementById("section");
        var attr = document.createAttribute("id");
        attr.value = "buttons";
        buttons.setAttribute(attr);
        titleBar.appendChild(buttons);
    }
    function showTitleBar(){
        document.body.appendChild(titleBar);
    }
}
