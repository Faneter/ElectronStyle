class Manager {
  private static comps: Component[];
  public static setUI(ui: UI) {}
  public static setTheme(theme: Theme) {}
  public static addComp(comp:Component) {
    Manager.comps.push(comp);
  }
}
module.exports = "Manager";
