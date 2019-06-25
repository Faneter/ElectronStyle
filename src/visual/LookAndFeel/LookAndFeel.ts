namespace ElectronStyle {
  export interface LookAndFeel {
    getUI(type: string): ElectronStyle.UI;
    getType(): ElectronStyle.Type;
  }
}
