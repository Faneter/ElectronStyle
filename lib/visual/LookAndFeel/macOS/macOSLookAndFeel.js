class macOSLookAndFeel {
    getUI(type) {
        return new ElectronStyle.UI("css/" + type + ".css", "macOS");
    }
}
