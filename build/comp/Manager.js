class Manager {
    static setUI(ui) { }
    static setTheme(theme) { }
    static addComp(comp) {
        Manager.comps.push(comp);
    }
    static removeComp(comp) {
        var index = Manager.comps.indexOf(comp);
        if (index > -1) {
            Manager.comps.splice(index, 1);
        }
    }
}
module.exports = "Manager";
