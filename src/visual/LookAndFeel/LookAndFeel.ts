namespace ElectronStyle {
  export interface LookAndFeel {
<<<<<<< HEAD
    getUI(): ElectronStyle.UI;
    /**
     * 窗体的初始化动作
     *
     * @param titleBar 窗体的标题栏,可对其进行布局动作
     *
     * // TODO: 可能会增加更多的窗体组件
     */
    init(titleBar: ElectronStyle.TitleBar): void;
=======
    getUI(type: string): ElectronStyle.UI;
    getType(): ElectronStyle.Type;
>>>>>>> b4934bba499efd60bb594720f74564c591fa59fe
  }
}
