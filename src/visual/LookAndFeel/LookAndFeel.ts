namespace ElectronStyle {
  export interface LookAndFeel {
    getUI(): ElectronStyle.UI;
    /**
     * 窗体的初始化动作
     *
     * @param titleBar 窗体的标题栏,可对其进行布局动作
     *
     * // TODO: 可能会增加更多的窗体组件
     */
    init(titleBar: ElectronStyle.TitleBar): void;
  }
}
