/**
 * An object representation of a button on a web-page
 */
abstract class Button {
    private button: HTMLElement;
    constructor(id:string) {
        this.button = document.getElementById(id);
    }

    abstract getClickEvent():Function;

    public click() {
        let clickEvent:Function = this.getClickEvent();
        clickEvent();
        this.button.click();
    }
}