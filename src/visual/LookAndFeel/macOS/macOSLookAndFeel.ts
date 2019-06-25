class macOSLookAndFeel implements ElectronStyle.LookAndFeel {
  getUI(type: string): ElectronStyle.UI {
    return new ElectronStyle.UI({}, "macOS");
  }
  getType(): ElectronStyle.Type {
    return {};
  }
}
