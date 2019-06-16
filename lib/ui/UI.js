/**
 * UI
 * 用来定义组件的样式
 * 例如:圆角等
 */
class UI {
    constructor(jsonPath, styleName) {
        var jsonT;
        var fs = require("fs");
        fs.readFile(jsonPath, function (err, data) {
            if (err) {
                throw new Error(err);
            }
            else {
                var jsonFile = data.toString();
                jsonT = JSON.parse(jsonFile);
            }
        });
        this.json = jsonT;
        this.styleName = styleName;
    }
    getStyleName() {
        return this.styleName;
    }
}
