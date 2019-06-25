namespace ElectronStyle {
  export enum LocationEnum {
    LEFT,
    RIGHT
  }
  export interface Location {
    icon?: LocationEnum;
    titleBar?: LocationEnum;
    menuBar?: LocationEnum;
    title?: LocationEnum;
    controlButtonBar?: LocationEnum;
  }
}
