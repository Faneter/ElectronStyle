/**
 * UI
 * 用来定义组件的样式
 * 例如:圆角等
 */
class UI {
  private json: JSON;
  private styleName: string;
  constructor(jsonPath: string, styleName: string) {
    var jsonT: JSON;
    var fs = require("fs");
    fs.readFile(jsonPath, function(err, data) {
      if (err) {
        throw new Error(err);
      } else {
        var jsonFile = data.toString();
        jsonT = JSON.parse(jsonFile);
      }
    });
    this.json = jsonT;
    this.styleName = styleName;
  }
  public getStyleName(): string {
    return this.styleName;
  }
}
