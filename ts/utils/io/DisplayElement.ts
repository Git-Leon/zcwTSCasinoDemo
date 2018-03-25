class DisplayElement {
    private displayEle: HTMLElement;

    constructor(id:string) {
        this.displayEle = document.getElementById(id);
    }


    public appendText(text:string) {
        this.displayEle.innerHTML += text;
    }

    public getValue() {
        return (this.displayEle as any).value;
    }
}