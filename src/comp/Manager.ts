class Manager {
  private static comps: Component[];
  private static lookAndFeel: ElectronStyle.LookAndFeel;
  public static setLookAndFeel(lookAndFeel: ElectronStyle.LookAndFeel) {
    this.lookAndFeel = lookAndFeel;
    // 更新组件UI和主题
    for (let i = 0, size = this.comps.length; i < size; i++) {
      let comp: Component = this.comps[i];
      comp.setUI(this.lookAndFeel.getUI(comp.getType()));
<<<<<<< HEAD
=======
      comp.setTheme(this.lookAndFeel.getTheme(comp.getType()));
>>>>>>> b4934bba499efd60bb594720f74564c591fa59fe
    }
  }
  /**
   * @param comp - 组件
   */
  public static addComp(comp: Component) {
    Manager.comps.push(comp);
    comp.setUI(this.lookAndFeel.getUI(comp.getType()));
<<<<<<< HEAD
=======
    comp.setTheme(this.lookAndFeel.getTheme(comp.getType()));
>>>>>>> b4934bba499efd60bb594720f74564c591fa59fe
  }
  public static removeComp(comp: Component) {
    var index: number = Manager.comps.indexOf(comp);
    if (index > -1) {
      Manager.comps.splice(index, 1);
    }
  }
}
module.exports = "Manager";
