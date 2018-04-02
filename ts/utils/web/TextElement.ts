/**
 * An object representation of a text-field on a web-page
 */
class TextElement {
    private displayEle: HTMLElement;

    constructor(id:string) {
        this.displayEle = document.getElementById(id);
    }


    public appendText(textToAppend:string) {
        this.displayEle.innerHTML += textToAppend;
        console.log("appended text to display element...\n\n" + textToAppend);
    }

    public getText() {
        return (this.displayEle as any).value;
    }

    public setText(text:string) {
        this.displayEle.innerHTML = text;
    }

    public clearText() {
        this.setText("");
    }
}