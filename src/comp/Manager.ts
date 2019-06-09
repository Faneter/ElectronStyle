class Manager {
  private static comps: Component[];
  public static setUI(ui: UI) {}
  public static setTheme(theme: Theme) {}
  public static addComp(comp: Component) {
    Manager.comps.push(comp);
  }
  public static removeComp(comp: Component) {
    var index: number = Manager.comps.indexOf(comp);
    if (index > -1) {
      Manager.comps.splice(index, 1);
    }
  }
}
module.exports = "Manager";
