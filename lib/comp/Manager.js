class Manager {
    static setLookAndFeel(lookAndFeel) {
        this.lookAndFeel = lookAndFeel;
        // 更新组件UI和主题
        for (let i = 0, size = this.comps.length; i < size; i++) {
            let comp = this.comps[i];
            comp.setUI(this.lookAndFeel.getUI(comp.getType()));
        }
    }
    /**
     * @param comp - 组件
     */
    static addComp(comp) {
        Manager.comps.push(comp);
        comp.setUI(this.lookAndFeel.getUI(comp.getType()));
    }
    static removeComp(comp) {
        var index = Manager.comps.indexOf(comp);
        if (index > -1) {
            Manager.comps.splice(index, 1);
        }
    }
}
module.exports = "Manager";
