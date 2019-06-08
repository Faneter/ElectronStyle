class ActionListener extends Listener {
    constructor(func) {
        super();
        this.event = func;
    }
    apply(element) {
        element.addEventListener("click", this.event);
    }
}
